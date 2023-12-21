import React, {FormEventHandler} from 'react';
import styled from "styled-components";

const InputBar = styled.input`
  border-radius: 5px;
  margin-right: 5px;
  font-family: "Nirmala UI",serif;
`

const Input = ({placeholder, onChange} : {placeholder: string, onChange: FormEventHandler<HTMLInputElement>}) => {
    return <InputBar placeholder={placeholder} onChange={onChange}/>
}

export default Input;