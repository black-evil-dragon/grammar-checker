import React from "react"

const useInput = (initialValue: string) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = (event: any) => { // ok?
        setValue(event.target.value)
    }

    return {
        value,
        onChange
    }
}

export default useInput