import React, {FormEventHandler} from 'react';

const Input = ({placeholder, onChange} : {placeholder: string, onChange: FormEventHandler<HTMLInputElement>}) => {
    return <input placeholder={placeholder} onChange={onChange}/>
}

export default Input;