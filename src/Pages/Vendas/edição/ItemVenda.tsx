import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../../../Components/layout/Header';

export function ItemVenda() {

    return(
        <>
        <Header />
        <Container >
            <Row className='mt-4'>
                <Col xs={6}>
                    <div className='w-100'>
                        <img className='w-100' src={"https://img.freepik.com/vetores-premium/maquete-de-t-shirt-masculina-de-vetor-amarelo_292608-200.jpg"} alt="" />
                    </div>
                </Col>
                <Col xs={6}>
                    <div className='d-flex flex-column justify-content-around text-center h-75'>
                        <h5>Camisa Nike</h5>
                    
                            <div>
                                Data da venda: 32/12/2023
                            </div>
                            
                            <div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur porro voluptate recusandae atque dolor officia voluptatibus natus, eius odit similique non pariatur veniam mollitia assumenda molestiae ad temporibus ab itaque.</p>
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