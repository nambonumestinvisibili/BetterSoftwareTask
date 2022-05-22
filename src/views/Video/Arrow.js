import React from 'react'
import { useNavigate } from 'react-router-dom'
import styledComponents from 'styled-components'
import { HOME_ROUTE } from '../../components/main/Routes'
import { COLORS } from '../../style/colors'
import { FONT_SIZES } from '../../style/font-sizes'

const StyledArrow =  styledComponents.div`
  font-size: ${FONT_SIZES.VIDEO_TITLE};
  display: flex;
  align-items: center;
  margin-right: 30px;

  &:hover {
    color: ${COLORS.white};
  }
`

const Arrow = () => {
  const navigate = useNavigate()

  return (
    <StyledArrow onClick={() => navigate(-1)}>
      {"<---"}
    </StyledArrow>
  )
}

export default Arrow