import React from 'react'
import { InputProps } from '../../types'

const Input: React.FunctionComponent<InputProps> = ({ type, placeholder, value, onChange, readonly }) => {
    return (
        readonly ?
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={true}

            />
            :
            <>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </>
    )
}

export default Input