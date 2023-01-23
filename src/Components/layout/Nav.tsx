
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Nav() {
    useEffect(() => {
        

    }, [])
    let list = [
        {nameNav:'Lista de Produtos', path:'/lista-produtos'},
        {nameNav:'Vendas', path:'/vendas'},
        {nameNav:'Clientes', path:'/clientes'},
        {nameNav:'Cupons', path:'/cupons'},
        {nameNav:'Chat', path:'/chat'}
    ]

    return(
        <ul className="flex flex-col gap-5 px-3 w-52 pt-6 ">
           {list.map((item, index)=>(
             <li  className="w-full" key={index}>
             <Link to={item.path} className="hover:underline underline-offset-2">
                {item.nameNav}
             </Link>
            </li>
           ))}
        </ul>
    )
}