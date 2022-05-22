import React from 'react'
import styledComponents from 'styled-components'
import VideoTitle from './VideoTItle'

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

  return (
    <Wrapper>
      <VideoTitle title={video?.Title}/>
      <StyledImage src={retrieveImageUrl(video)} alt="Video" />
    </Wrapper>
  )
}

export default VideoBaner