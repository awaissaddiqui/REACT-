import { useState } from 'react'
const Counter = () => {
    const [count, setCount] = useState(0);
    const plus = () => {
        setCount(count+1);
    }
    const minus = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>Plus </button>
            <button onClick={minus}>Minus  </button>
            <button onClick={reset}>reset </button>


        </div>
    )
}
export default Counter