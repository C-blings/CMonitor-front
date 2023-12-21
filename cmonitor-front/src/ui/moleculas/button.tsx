import React, {MouseEventHandler} from 'react';
import styled from "styled-components";

interface Props{
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button`
  border-radius: 5px;
  background: rebeccapurple;
  color: white;
  margin: 10px;
`

const Button = (props : Props) => {
    return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
}

export default Button;