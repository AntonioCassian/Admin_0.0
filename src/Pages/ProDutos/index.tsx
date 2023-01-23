import React, { useEffect, useState } from "react";
import { Header } from "../../Components/layout/Header";
import { Nav } from "../../Components/layout/Nav";
import { Link } from "react-router-dom";
import { Table } from "../../types/Table";
import { Pesquisa } from "../../Components/layout/Pesquisa";

export function Produtos (){
    const [tab, setTab] = useState<Table[]>([]);

    useEffect(() => {
        loadTable();
    }, []);

    const loadTable = async () => {
        try{
            let response = await fetch("http://localhost:3004/posts");
            let json = await response.json();
            setTab(json);
        } catch(e) {
           alert("Tente Novamente mais tarde! Sua Base de Dados não está carreagando!");
        }
    }


    return(
        <>
        <Header/>
        <div className="flex gap-15 justify-items-center">
            <Nav />
            <div className="text-center flex-1 px-16">
                <h4 className="text-md">Lista de Produtos</h4>
                <Pesquisa />

                <div className="row">
                <table className="w-full text-center">
                    <thead className="text-md bg-gray-800 text-gray-200">
                        <tr>
                            <th scope="col" className="py-3 px-6">Quantidade</th>
                            <th scope="col" className="py-3 px-6">Q-Minima</th>
                            <th scope="col" className="py-3 px-6">Valor</th>
                            <th scope="col" className="py-3 px-6">Marca</th>
                            <th scope="col" className="py-3 px-6">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tab.map((item, index) => (
                        <tr key={index} className="bg-gray-400 border-black border-b">
                            <td className="border-b-blackpy-4 px-6">{item.Quantidade}</td>
                            <td className="border-b-blackpy-4 px-6">{item.QMinima}</td>
                            <td className="border-b-blackpy-4 px-6">{item.Valor}</td>
                            <td className="border-b-blackpy-4 px-6">{item.Marca}</td>
                            <td className="border-b-blackpy-4 px-6"><Link to='#'>{item.Ação}</Link></td>
                        </tr>
                        ))}        
                    
                    </tbody>
                </table>
                </div>
            </div>
        </div>        
    </>
    )
}