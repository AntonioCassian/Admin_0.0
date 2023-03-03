
import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
    let list = [
        {nameNav:'Home', path:'/'},
        {nameNav:'Lista de Produtos', path:'/lista-produtos'},
        {nameNav:'Vendas', path:'/vendas'},
        {nameNav:'Clientes', path:'/clientes'},
    ]

    return(
        <ul className="list-group list-group-flush position-fixed vh-100" style={{background:'white', width: 'auto'}}>
           {list.map((item, index)=>(
             <li  className="list-group-item d-flex flex-column justify-content-between m-4" key={index}>
             <Link to={item.path} className="text-black text-decoration-none">
                {item.nameNav}
             </Link>
            </li>
           ))}
        </ul>
    )
}