import './CounterBtn.css'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import { useState } from 'react'
function CounterBtn({ initialValue }){
    const[counter,setcounter]=useState(initialValue)
    function Increment(){
        setcounter(counter+1)
    }
    function Decrement(){
        if(counter>0){
            setcounter(counter-1)
        }
    }
    return(
        <div className='btns'>
            <button onClick={Increment} className='click'>
                <img src={plus} />
            </button>
            <label className='count'>{counter}</label>
            <button onClick={Decrement} className='click'>
                <img src={minus} />
            </button>
        </div>
    )
}
export default CounterBtn