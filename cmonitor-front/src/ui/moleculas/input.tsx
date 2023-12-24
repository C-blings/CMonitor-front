import React, {FormEventHandler} from 'react';
import {InputBar} from "../styles/moleculas/input_styles";


const Input = ({placeholder, onChange} : {placeholder: string, onChange: FormEventHandler<HTMLInputElement>}) => {
    return <InputBar placeholder={placeholder} onChange={onChange}/>
}

export default Input;