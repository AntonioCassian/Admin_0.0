import React from 'react';
import { Form } from '../../Components/layout/Form';
import { Header } from '../../Components/layout/Header';
import { Nav } from '../../Components/layout/Nav';

export function Vendas() {
    return(
        <>
        <Header />
        <div className="flex gap-15 justify-items-center">
            <Nav />
            <div className="text-center flex-1 px-16">
                <h2>Vendas</h2>
                <Form/>
                <div className="row">
                <table className="w-full text-center">
                    <thead className="text-md bg-gray-800 text-gray-200">
                        <tr>
                            <th scope="col" className="py-3 px-6">Comprador</th>
                            <th scope="col" className="py-3 px-6">Realizadas</th>
                            <th scope="col" className="py-3 px-6">Valor Total</th>
                            <th scope="col" className="py-3 px-6">Marca</th>
                            <th scope="col" className="py-3 px-6">Situação</th>
                            <th scope="col" className="py-3 px-6">Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-400 border-black border-b" >
                            <td className="border-b-blackpy-4 px-6">Sandoval Teodosio de Lima</td>
                            <td className="border-b-blackpy-4 px-6">10</td>
                            <td className="border-b-blackpy-4 px-6">90,00</td>
                            <td className="border-b-blackpy-4 px-6">Polo</td>
                            <td className="border-b-blackpy-4 px-6">Aprovada</td>
                            <td className="border-b-blackpy-4 px-6"><a href="#">visualizar</a></td>
                        </tr>
                        <tr className="bg-gray-400 border-black border-b" >
                            <td className="border-b-blackpy-4 px-6">Sandoval Teodosio de Lima</td>
                            <td className="border-b-blackpy-4 px-6">10</td>
                            <td className="border-b-blackpy-4 px-6">90,00</td>
                            <td className="border-b-blackpy-4 px-6">Polo</td>
                            <td className="border-b-blackpy-4 px-6">Aprovada</td>
                            <td className="border-b-blackpy-4 px-6"><a href="#">visualizar</a></td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>        
    </>
    )
}