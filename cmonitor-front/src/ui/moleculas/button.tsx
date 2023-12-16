import React, {MouseEventHandler} from 'react';

interface Props{
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = (props : Props) => {
    return <button onClick={props.onClick}>{props.text}</button>
}

export default Button;