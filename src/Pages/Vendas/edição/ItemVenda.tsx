import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../../../Components/layout/Header';
import { api } from '../../../service/api';

export function ItemVenda() {
    const navigate = useNavigate()
    const [data, setData ] = useState({
        image: '', descricao: '', nome: '', situacao: '', id: 0
    })
    const {id} = useParams();
    const dele = (id: number) => {
        api.delete(`/clientes/${id}`)
        .then(response => {
            setData(response.data);
            navigate('/vendas')
        })
    }

    useEffect(() => {
        api.get(`/vendas/${id}`)
        .then(response => {
            setData(response.data);
        })
        .catch(() => {
            alert("Erro ao Consultar o BD");
        });
    }, [id]);
    return(
        <>
        <Header />
        <Container >
            <Row className='mt-4'>
                <Col xs={6}>
                    <div className='w-100'>
                        <img className='w-100' src={data.image} alt="" />
                    </div>
                </Col>
                <Col xs={6}>
                    <div className='d-flex flex-column justify-content-around text-center h-75'>
                        <h5>{data.nome}</h5>
                    
                            <div>
                                Data da venda: 32/12/2023
                            </div>
                            
                            <div>
                                <p>{data.descricao}</p>
                            </div>


                            <div>
                            <p className='underline'>Situação:</p>
                                <Badge bg={data.situacao ?  "success" : "warning"}>
                                    {data.situacao ?  "Aprovado" : "Pendente"}
                                </Badge>
                            </div>
                    </div>
                   <center>
                     {data.situacao ? 
                     <button className="btn btn-danger mt-5" disabled>
                        Cancelar Venda
                    </button>                : 
                        <button className="btn btn-danger mt-5" onClick={() => dele(data.id)}>
                        Cancelar Venda
                        </button>
                    }
                   </center>
                </Col>
            </Row>
        </Container>
        </>
    )
}