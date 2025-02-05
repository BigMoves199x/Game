import React from 'react'
import './Status.css'

const Status = ({ status }) => {

  return (
    <div>
      <p data-testid="gameStatus" className={`status-message ${status ? "fade-in" : ""}`}>
        {status}
      </p>
    </div>

  )
}

export default Status