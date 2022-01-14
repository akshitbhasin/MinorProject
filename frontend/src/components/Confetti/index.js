import React from 'react'

import Confetti from 'react-confetti'

export default () => {
  const { width, height } = {window}
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}