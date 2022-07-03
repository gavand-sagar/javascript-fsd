import { useState } from 'react'

export default function Counter({ heading, max, min,initialValue }) {
    //previous code
    // let number = 3; // this needs to be state


    // in oder to have it like state
    let [number, setNumber] = useState(initialValue)//   1 is initial value of number

    let Increment = () => {

        //previous code to change variable value
        // number = 50;


        //with state if you want to change value
        if (number < max) {
            setNumber(+number + +1)
        }
    }

    let Decrement = () => {
        if (number > min) {
            setNumber(+number - +1)
        }
    }

    return (<>
        <span>{heading}</span>
        <button onClick={Decrement}>-</button><span>{number}</span><button onClick={Increment}>+</button>
    </>)
}