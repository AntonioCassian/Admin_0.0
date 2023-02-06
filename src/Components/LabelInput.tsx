import React from "react";
interface IValorInput{
    label?: string;
    htmlFor?: string;
    type: string;
    id?: string;
    value: string;
    placeholder?: string;
    className?: string;
    onChange: (newValue: string) => void;
}
export const LabelInput: React.FC<IValorInput> = (props) => {

    return(
        <>
            <label htmlFor={props.htmlFor}  className="pb-5">
                <p className="text-sm font-semibold">{props.label}</p>

                <input 
                    type={props.type}
                    id={props.id}
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"
                    onChange={e => props.onChange(e.target.value)}    
                    value={props.value}
                    placeholder={props.placeholder}
                />

            </label>
        </>
        
    );
}