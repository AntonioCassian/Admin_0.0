import React from "react";
import { Link } from "react-router-dom";
interface Ilin {
    to: string;
    text: string;
    className: string;
}
export const Button: React.FC<Ilin> = (props) => {
    return(
        <button className={props.className}>
            <Link to={props.to} className='text-decoration-none text-white'>
                {props.text}
            </Link>
        </button>
    )
}