import React from 'react'
import styledComponents from 'styled-components'
import VideoTitle from './VideoTItle'
import { useNavigate } from 'react-router-dom'
import { VIDEO_ROUTE } from '../../../components/main/Routes'

const DESIRED_IMAGE_TYPE_CODE = 'FRAME'
const PLACEHOLDER_IMAGE_URL = ''

const StyledImage = styledComponents.img`
  filter: brightness(50%);

  &:hover {
    filter: brightness(100%);
  }

  aspect-ratio: 16 / 9;
  height: fit-content;
`

const Wrapper = styledComponents.div`
  position: relative;
`

const VideoBaner = ({ video }) => {
  
  const retrieveImageUrl = (video) => {
    const imageUrl = video?.Images?.find(image => image.ImageTypeCode === DESIRED_IMAGE_TYPE_CODE)
    return imageUrl ? imageUrl.Url : PLACEHOLDER_IMAGE_URL
  }

  const navigate = useNavigate()

  const goToVideoPlayer = (video) => {
    navigate(`${VIDEO_ROUTE}/${video?.Id}`)
  }

  return (
    <Wrapper>
      <VideoTitle title={video?.Title}/>
      <StyledImage 
        onClick={() => goToVideoPlayer(video)}
        src={retrieveImageUrl(video)} 
        alt="Video" />
    </Wrapper>
  )
}

export default VideoBaner