import React, { useState, useEffect, useContext } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import styledComponents from 'styled-components'
import { videosApi } from '../../api/api'
import { GlobalContext } from '../../App'
import Header from '../../components/header/Header'
import { COLORS } from '../../style/colors'
import { FONT_SIZES } from '../../style/font-sizes'
import Arrow from './Arrow'

const NoFileError = styledComponents.div`
  color: ${COLORS.red};
`

const HeaderWithArrow = styledComponents.div`
  display: flex;
  font-size: ${FONT_SIZES.VIDEO_TITLE};
  color: ${COLORS.red};
`

const VideoView = () => {
  const [video, setVideo] = useState()
  const [visibleError, setVisibleError] = useState()

  const { id } = useParams()
  
  const { showLoading, hideLoading } = useContext(GlobalContext)

  useEffect(() => {
    showLoading()
  }, [])

  useEffect(() => {
    videosApi.getTrialVideo(id)
      .then(result => {
        setVideo(result.data)
      })
      .catch(err => {
        setVisibleError(true)
      })
  }, [id])
  
  return (
    <>
      <HeaderWithArrow>
        <Arrow>
          {"<---"}
        </Arrow>
        <Header 
          title={video?.Title}
        />
      </HeaderWithArrow>
      <ReactPlayer 
        url={video?.ContentUrl}
        playing
        onError={() => {
          setVisibleError(true)
          hideLoading()
        }}
        onReady={() => hideLoading()}
      />
      { visibleError && 
          <NoFileError>
            We cannot find the video :(. Please try again later
          </NoFileError>
      }
    </>
  )
}

export default VideoView