import React from 'react';

const Button = (props) => {
    const {action, title} = props;

    return (
        <button onClick = {action}>{title}</button>
    )
}

export default Button;