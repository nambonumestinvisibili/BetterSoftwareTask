import React from 'react'
import styledComponents from 'styled-components'
import VideoBaner from './VideoBaner'

const Wrapper = styledComponents.div`
  width: 100%;
  height: 300px;
  background-color: pink;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  margin: 100px 0;
`

const VideoList = ({ videos }) => {
  return (
    <Wrapper>
      {videos.map((video, idx) => <VideoBaner key={video.Guid + idx} video={video} />)}
    </Wrapper>
  )
}

export default VideoList