import React from "react";
import { Link } from "react-router-dom";

export const Button = () => {
    return(
        <button className="text-gray-200 bg-linear">
            <Link to='/cadastroProduto'>
                Criar Cadastro
            </Link>
        </button>
    )
}