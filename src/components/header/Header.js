import React from 'react'
import styledComponents from 'styled-components'
import { COLORS } from '../../style/colors'
import { FONT_SIZES } from '../../style/font-sizes'

const Wrapper = styledComponents.div`
  color: ${COLORS.red};
  font-size: ${FONT_SIZES.HEADER};
`

const Header = ({ title }) => {
  return (
    <Wrapper>
      {title}
    </Wrapper>
  )
}

export default Header