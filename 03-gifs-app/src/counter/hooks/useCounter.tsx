import { useState } from "react"

export const useCounter = ( initialValue:number = 5 ) => {
    const [ counter, setCounter ] = useState(initialValue)

    const handledAdd = () => {
        setCounter(counter + 1)
    }
    const handledSubtract = () => {
        setCounter(counter - 1)
    }
    const handledReset = () => {
        setCounter(initialValue)
    }
    return {
        // Values
        counter,
        // Methods
        handledAdd,
        handledSubtract,
        handledReset

        //Actions
    }
}