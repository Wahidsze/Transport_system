import React from "react";
import './info_input.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export enum InputType{
    DEPARTURE_CITY = "departure-city",
    ARRIVAL_CITY = "arrival-city",
    DATE = "date"
}

type InputProps = {
    input_type: InputType
}

let TypeToName ={
    "departure-city": "Откуда",
    "arrival-city": "Куда",
    "date": "Когда"
}

function InfoInput({input_type}:InputProps){
    const inputclass: string = input_type == 'departure-city' ? 'rounded-start-4 ' : 'rounded-0 ';
    return(
        <FloatingLabel controlId="floatingTextarea" label={TypeToName[input_type]}>
            <Form.Control as="input" placeholder={TypeToName[input_type]} className={inputclass + input_type}/> 
        </FloatingLabel>
    )
}
export default InfoInput;