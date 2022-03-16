import React from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    const multiply = () => {
        setCount(count*2);
    }

    return (
        <>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <Button action = {increment} title = '+'/>
            <Button action = {decrement} title = '-'/>
            <Button action = {multiply} title = '*'/>
        </>
    )
}

export default Counter;