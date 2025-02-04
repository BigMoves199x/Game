import React from 'react'
import './Status.css'

const Status = ({status}) => {

  return (
    <p  data-testid="gameStatus" className={`status-message ${status ? "fade-in" : ""}`}>
    {status}
  </p>
  )
}

export default Status