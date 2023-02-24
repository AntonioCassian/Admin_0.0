
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Nav() {
    let list = [
        {nameNav:'Lista de Produtos', path:'/lista-produtos'},
        {nameNav:'Vendas', path:'/vendas'},
        {nameNav:'Clientes', path:'/clientes'},
        {nameNav:'Cupons', path:'/cupons'},
        {nameNav:'Chat', path:'/chat'}
    ]

    return(
        <ul className="list-group list-group-flush position-fixed">
           {list.map((item, index)=>(
             <li  className="list-group-item" key={index}>
             <Link to={item.path} className="text-black text-decoration-none">
                {item.nameNav}
             </Link>
            </li>
           ))}
        </ul>
    )
}