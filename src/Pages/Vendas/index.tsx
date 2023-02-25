import React, { useEffect, useState } from "react";
import { api, IListVendas } from '../../service/api';
import { useNavigate } from 'react-router-dom';
import { Pesquisa } from '../../Components/layout/Pesquisa';
import { Header } from '../../Components/layout/Header';
import { Nav } from '../../Components/layout/Nav';
import { Col, Container, Row, Table } from "react-bootstrap";

export function Vendas() {
    const navigate = useNavigate();
    const [tab, setData] = useState<IListVendas[]>([]);
    console.log(tab);
    useEffect(() => {
       api.get('/vendas')
       .then((result) => {
            setData(result.data);
       })
       .catch(() => {
        alert('Erro ao consultar o bando de Dados')
       });
    }, []);
    return(
        <>
        <Header />
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <Nav />
                </Col>
                <Col>
                <Col xs={12} className="centered">
                <div className="text-center">
                    <div className="">
                        <h4>Vendas</h4>
                        <div>
                        <Pesquisa />
                        </div>  
                    </div>      
                </div>
                <div>
                <Table className="w-full text-center">
                    <thead className="text-md bg-gray-800 text-gray-200">
                        <tr>
                            <th scope="col" className="py-3 px-6">Comprador</th>
                            <th scope="col" className="py-3 px-6">QCompras</th>
                            <th scope="col" className="py-3 px-6">Valor Total</th>
                            <th scope="col" className="py-3 px-6">Marca</th>
                            <th scope="col" className="py-3 px-6">Tamanho</th>
                            <th scope="col" className="py-3 px-6">Situação</th>
                            <th scope="col" className="py-3 px-6">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tab.map((data) => (
                            <tr key={data.id} className="bg-gray-400 border-black border-b" >
                            <td className="border-b-black py-4 px-6">{data.comprador}</td>
                            <td className="border-b-black py-4 px-6">{data.qprod}</td>
                            <td className="border-b-black py-4 px-6">{data.total}</td>
                            <td className="border-b-black py-4 px-6">{data.marca}</td>
                            <td className="border-b-black py-4 px-6">{data.tamanho}</td>
                            <td className="border-b-black py-4 px-6">{data.situacao}</td>
                            <td className="border-b-black py-4 px-6"><a href="#">Visualizar</a></td>
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