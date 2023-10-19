import React from 'react'
import './text.css'

const Text = ({font, fontUppercase}) => {
    return (
        <div>
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste, ullam quam aperiam officiis perspiciatis voluptates exercitationem excepturi fugit atque at animi doloremque totam facere id dignissimos quas ab placeat?</p>
            <p className='text' style={{color:font, textTransform:fontUppercase}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iste, ullam quam aperiam officiis perspiciatis voluptates exercitationem excepturi fugit atque at animi doloremque totam facere id dignissimos quas ab placeat?</p>
        </div>
    )
}

Text.defaultProps = {
    font:'green',
    fontUppercase: 'uppercase'
}

export default Text