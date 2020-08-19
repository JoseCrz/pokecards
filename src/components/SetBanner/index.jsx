import React from 'react'
import PropTypes from 'prop-types'

import { Banner, TextContainer, Img, P } from './styles'

export const SetBanner = ({ logoUrl, series, totalCards, releaseDate }) => {
  return (
    <Banner>
      <Img src={logoUrl} alt='' />
      <TextContainer>
        <P>{`Series: ${series}`}</P>
        <P>{`Total Cards: ${totalCards}`}</P>
        <P>{`Release Date: ${releaseDate}`}</P>
      </TextContainer>
    </Banner>
  )
}

SetBanner.defaultProps = {
  logoUrl: '',
  series: '',
  totalCards: 0,
  releaseDate: ''
}
SetBanner.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  series: PropTypes.string.isRequired,
  totalCards: PropTypes.number.isRequired,
  releaseDate: PropTypes.string.isRequired
}
