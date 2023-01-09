import React from 'react'
import Button from '../tags/Button'

type KeyboardProps = {
    keys: Array<{
        text: string,
        active?: boolean,
    }>,
    onClick?: any
}

const Keyboard: React.FunctionComponent<KeyboardProps> = ({ keys, onClick }) => {
    return (
        <div className="keyboard">
            {
                keys.map((key, index) => (
                    <div key={index} className='keyboard__button'>
                        <Button onClick={() => onClick(key)}>{key.text}</Button>
                    </div>
                ))
            }
        </div>
    )
}

export default Keyboard