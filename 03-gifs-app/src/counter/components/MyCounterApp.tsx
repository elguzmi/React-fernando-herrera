import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {
    const { counter, handledAdd, handledSubtract, handledReset } = useCounter(10)  // Custom Hook
    const { counter:counter2 } = useCounter(20)  // Custom Hook
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>Counter: {counter} - {counter2}</h1>

        <div style={{display: 'flex', flexDirection: 'row', gap: 10}}>
            <button onClick={handledAdd}>+1</button>
            <button onClick={handledSubtract}>-1</button>
            <button onClick={handledReset}>Reset</button>
        </div>
    </div>
  )
}