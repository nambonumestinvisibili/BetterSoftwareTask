import React from 'react'
import styledComponents from 'styled-components'
import { COLORS } from '../../../style/colors'
import { FONT_SIZES } from '../../../style/font-sizes'

const StyledTitle = styledComponents.div`
  font-size: ${FONT_SIZES.VIDEO_TITLE};
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 10;
  color: ${COLORS.white};
  font-weight: 600;
`

const VideoTitle = ({ title }) => {
  return (
    <StyledTitle>
      { title }
    </StyledTitle>
  )
}

export default VideoTitle