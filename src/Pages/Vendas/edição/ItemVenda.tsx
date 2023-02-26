import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Header } from '../../../Components/layout/Header';
import { api } from '../../../service/api';
export function ItemVenda() {
    const [data, setData ] = useState({
        image: '', descricao: '', nome: ''
    })
    const {id} = useParams();
    console.log(id);

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
                            <p>Compra Aprovada</p>
                            </div>
                    </div>
                   <center>
                     <button className='btn btn-danger mt-5'>
                        Cancelar Compra
                    </button>
                   </center>
                </Col>
            </Row>
        </Container>
        </>
    )
}