import React from "react";
interface IValorInput{
    label?: string;
    htmlFor?: string;
    type: string;
    id?: string;
    name?: string;
    value?: string;
    placeholder?: string;
    style?: {};
    className?: string;
    onChange: (newValue: string) => void;
}
export const LabelInput: React.FC<IValorInput> = (props) => {

    return(
        <>
            <label htmlFor={props.htmlFor}  className="d-flex flex-column">
                <span className="align-content-start my-2" style={{fontSize: 16}}>{props.label}</span>

                <input 
                    type={props.type}
                    id={props.id}
                    onChange={e => props.onChange(e.target.value)}    
                    value={props.value}
                    style={props.style}
                    className={props.className}
                    name= {props.name}
                    placeholder={props.placeholder}
                />

            </label>
        </>
        
    );
}