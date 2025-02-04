import React from 'react'

const Scoreboard = ({score}) => {
  return (
    <h2 data-testid="score" className='score'>Score: {score}</h2>
  )
}

export default Scoreboard