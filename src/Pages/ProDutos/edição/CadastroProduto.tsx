import React,{ FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormAdd } from "../../../Components/layout/FormAdd";
import { Header } from "../../../Components/layout/Header";
import { api } from "../../../service/api";

export const CadastroProduto = () => {
    const navigate = useNavigate();

    
    const handleAdd = async (Quantidade: string, QMinima: string, Valor: string, Marca: string, Ação: string, Descricao: string, Image: string) => {
            let json = await api.AddNew(Quantidade, QMinima, Valor, Marca, Ação, Descricao, Image);
                if(json.id){
                    alert('Post adicionado com sucesso');
                } else {
                    alert('algo deu errado');
                    navigate('/cadastro-Produto');
                } 
    }   

    
    return(
        <>
            <Header />
            <FormAdd onAdd={handleAdd} />
        </>
    )
}