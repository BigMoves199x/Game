import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div className='color-Box' data-testid="colorBox" style={{backgroundColor: color}}></div>
  )
}

export default ColorBox