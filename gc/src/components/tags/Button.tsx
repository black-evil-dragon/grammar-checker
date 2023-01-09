import React from 'react'


type ButtonProps = {
    children: any,
    onClick: any
}
const Button: React.FunctionComponent<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default Button