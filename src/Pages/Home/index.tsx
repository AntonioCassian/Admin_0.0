import React from "react";
import { Container } from "reactstrap";
import { Header } from "../../Components/layout/Header";
import { Nav } from "../../Components/layout/Nav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () =>  {
    return(
        <>
        <Header />
            <section className="">
                <Container fluid>
                
                <Row >
            <Col xs={1}>
            <Nav />

            </Col>
            <Row className="justify-content-md-end">
            <Col xs={5}><input type="date" name="" id="" />
                    <div>
                    <p className="text-black text-xl"> Valor do dia:</p>
                    <p className="text-black pt-2">R$90,00</p>
                    </div>
                    <div>
                    <p className="text-black text-xl"> Valor mensal:</p>
                    <p className="text-black pt-2">R$90,00</p>
                    </div>
                    </Col>
            <Col xs={5} className="justify-content-md-center">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Col>
            </Row>
             </Row>
                </Container>
            </section>
        </>
    );
};