interface ValorInput{
    label?: string;
    htmlFor?: string;
    type: string;
    id?: string;
    value: string;
    placeholder?: string;
    onChange: (newValue: string) => void;
}

export const LabelInput: React.FC<ValorInput> = (props) => {
    return(
            <label htmlFor={props.htmlFor}  className="pb-5">
                <span className="text-sm font-semibold">{props.label}</span>
                <input 
                    type={props.type}
                    id={props.id}
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"
                    onChange={e => props.onChange(e.target.value)}    
                    value={props.value}
                    placeholder={props.placeholder}
                />
            </label>
    )
}