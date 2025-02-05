import React from 'react'

const ColorOptions = ({colors, onGuess}) => {
    return (
        <div className='color-options' >
            {colors.map((color) => (
                <button
                    key={color}
                    className="color-button"
                    data-testid="colorOption"
                    style={{backgroundColor: color}}
                    onClick={() => onGuess(color)}></button>
            ))}

        </div>
    )
}

export default ColorOptions