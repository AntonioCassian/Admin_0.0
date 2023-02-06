import React,{ FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    onAdd: (Quantidade: string, QMinima: string, Valor: string, Marca: string, Ação: string, Descricao: string, Image: string) => void;
}

export const FormAdd = ({onAdd}: Props) => {
    const navigate = useNavigate();

    const [Quantidade, setQuantidade] = useState('');
    const [QMinima, setQMinima] = useState('');
    const [Valor, setValor] = useState('');
    const [Marca, setMarca] = useState('');
    const [Ação, setAcao] = useState('Visualizar');
    const [Descricao, setDescricao] = useState('');
    const [Image, setImg] = useState('');
    
    const handleAddDados = async (e:FormEvent) => {
            e.preventDefault();
            if(Quantidade && QMinima && Valor && Marca && Descricao && Image === '') {
                alert("Preencha os campos!");
            } else {
                onAdd(Quantidade, QMinima, Valor, Marca, Ação, Descricao, Image);
                navigate('/lista-produtos');
            }
    }
    
    return(
        <form onSubmit={handleAddDados}>
                <label htmlFor="">
                    <span>Quantidade</span>
                <input 
                    type='number'
                    name="quantidade"
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"
                    onChange={e => setQuantidade(e.target.value)}    
                    value={Quantidade}
                />
                </label>
                <label htmlFor="">
                    <span>Q-Minima</span>
                <input 
                    type='text'
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"
                    onChange={e => setQMinima(e.target.value)}    
                    value={QMinima}
                />
                </label>
                <label htmlFor="">
                    <span>Valor</span>
                <input 
                    type='number'
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"
                    onChange={e => setValor(e.target.value)}    
                    value={Valor}
                />
                </label>
                <label htmlFor="">
                    <span>Marca</span>
                <input 
                    type='text'
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"
                    onChange={e => setMarca(e.target.value)}    
                    value={Marca}
                />
                </label>

                <label htmlFor="">
                    <span>Ação</span>
                <input 
                    type='hidden'
                    className="py-4 px-3 bg-gray-900 rounded w-full text-gray-200 text-xs placeholder:text-gray-400 outline-none"   
                    onChange={e => setAcao(e.target.value)}    
                    value={Ação}
                />
                </label>

                <label htmlFor="desc">
                    <span>Descrição</span>
                    <textarea 
                    name="" id="desc"
                    onChange={e => setDescricao(e.target.value)}    
                    value={Descricao}></textarea>
                </label>
                <label htmlFor="">
                    <input 
                    type="file" 
                    onChange={e => setImg(e.target.value)}
                    value={Image}
                    />
                </label>
            <button type="submit" >
                Enviar
            </button>
        </form> 
        
    );
}