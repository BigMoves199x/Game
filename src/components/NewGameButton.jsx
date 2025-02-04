import React from 'react'

const NewGameButton = ({onReset}) => {
  return (
    <p data-testid="newgame" className='reset-button'  onClick={onReset} >New Game</p>
  )
}

export default NewGameButton