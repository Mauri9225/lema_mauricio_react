import {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(1)
    const [prevCount, setPrevCount] = useState(1)
    
    const nextFibonacci = () => {
        const nextValue = prevCount + count
        setPrevCount(count)
        setCount(nextValue)
    }
    const resetSerie=() =>{
        setPrevCount(1)
        setCount(0)
    }
    return (
        <div className='counter'>
            <h2>Counter: {count}</h2>
            <div className='buttons'>         
                
                <button onClick={() => resetSerie()}>Reset</button>
                <button onClick={() => nextFibonacci()}>+</button>
            </div>
        </div>
    )
}

export default Counter
    