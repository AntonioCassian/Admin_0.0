import React, { useEffect, useState } from "react";
import { Header } from "../../Components/layout/Header";
import { Nav } from "../../Components/layout/Nav";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button";
import { api, ListProdutos } from "../../service/api";
import { Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
/**
 * 
 *  const search =(data: any) => {
    return data.filter((item: { Marca: string; })=> 
    item.Marca.toLowerCase().includes(busca));
}
 */

export function Produtos (){
    const navigate = useNavigate();
    const [tab, setTab] = useState<ListProdutos[]>([]);
    
    useEffect(() => {
       api.get('/produtos')
       .then((result) => {
            setTab(result.data);
       })
       .catch(() => {
        alert('Erro ao consultar o bando de Dados')
       });
    }, []);

    
    const view = (id: number) => {
        navigate(`/item-Produto/${id}`)
    }
    
    return(
        <>
        <Header/>     
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <Nav />
                </Col>
                <Col>
                <Col xs={12} className="centered">
                     <div className="text-center">
                    <div className="">
                        <h4>Lista de Produtos</h4>
                    <div>
                         
                    </div>
                    <Button to="/cadastro-Produto" text="Criar Produto" className="btn btn-secondary"/>  
                        
                        </div>   
                    </div>
                    <div>
                        <Table>
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
                        {tab.map((data, index) => (
                        <tr key={data.id} className="bg-gray-400 border-black border-b">
                            <td className="border-b-black py-4 px-6">{data.Quantidade}</td>
                            <td className="border-b-black py-4 px-6">{data.QMinima}</td>
                            <td className="border-b-black py-4 px-6">{data.Valor}</td>
                            <td className="border-b-black py-4 px-6">{data.Marca}</td>
                            <td className="border-b-black py-4 px-6"><button onClick={() => view(data.id)}>Visualizar</button></td>
                        </tr>
                        ))}        
                        
                    </tbody>
                        </Table>
                    </div>
                </Col>
                </Col>
            </Row>
            </Container>  
    </>
    )
}