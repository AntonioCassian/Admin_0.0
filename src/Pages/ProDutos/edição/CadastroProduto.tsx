import React,{ useState } from "react";
import { LabelInput } from "../../../Components/LabelInput";
import { Header } from "../../../Components/layout/Header";

export const CadastroProduto = () => {
    const [quantidade, setQuantidade] = useState('');
    const [QMinima, setQMinima] = useState('');
    const [valor, setValor] = useState('');
    const [marca, setMarca] = useState('');
    const [name, setName] = useState('');
    const [descricao, setDescricao] = useState('');
    const [image, setImg] = useState('');
    console.log(quantidade);
    return(
        <>
            <Header />
        <form action="">
            <LabelInput 
                label="Quantidade"
                type="number"
                value={quantidade}
                onChange={newValue => setQuantidade(newValue)}
            />
            <LabelInput 
            type="number" 
            onChange={newValue => setQuantidade(newValue)}
            value= {quantidade}
            />
            
        </form>
        </>
    )
}