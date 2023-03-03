import React, { useState , useEffect } from 'react';
import { Container, Row, Col, Table } from "react-bootstrap"
import { Header } from '../../Components/layout/Header';
import { Nav } from '../../Components/layout/Nav';
import { api, IClientes } from '../../service/api';
import { useNavigate } from 'react-router-dom';

export const Clientes = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState<IClientes []>([]);

    const view = (id: number) => {
        navigate(`/viewcliente/${id}`)
    }

    useEffect(() => {
        api.get('/clientes')
        .then(response => {
            setTab(response.data)
        })
        .catch(()=> {
            alert("Erro ao consultar BD!")
        })
    }, [])
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
                            <section>
                                <div className="text-center">
                                    <div className="">
                                        <h4>Clientes</h4>
                                       
                                    </div>      
                                </div>
                                <div>
                                <Table className="w-full text-center">
                                    <thead className="text-md bg-gray-800 text-gray-200">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">Nome</th>
                                            <th scope="col" className="py-3 px-6">CPF</th>
                                            <th scope="col" className="py-3 px-6">Email</th>
                                            <th scope="col" className="py-3 px-6">Senha</th>
                                            <th scope="col" className="py-3 px-6">Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tab.map((data) => (
                                            <tr key={data.id} className="bg-gray-400 border-black border-b" >
                                            <td className="border-b-black py-4 px-6">{data.nome}</td>
                                            <td className="border-b-black py-4 px-6">{data.cpf}</td>
                                            <td className="border-b-black py-4 px-6">{data.email}</td>
                                            <td className="border-b-black py-4 px-6">{data.senha}</td>
                                            <td className="border-b-black py-4 px-6">
                                                <button onClick={() => view(data.id)}>
                                                Visualizar
                                                </button>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                </div>
                            </section>
                        </Col>
                        </Col>
                        </Row>
                </Container>
        </>
    )
}