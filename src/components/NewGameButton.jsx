import React from 'react'

const NewGameButton = ({onReset}) => {
  return (
    <p data-testid="newGameButton" className='reset-button'  onClick={onReset} >New Game</p>
  )
}

export default NewGameButton