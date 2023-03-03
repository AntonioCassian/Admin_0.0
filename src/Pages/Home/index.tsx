import React from "react";
import { Container } from "reactstrap";
import { Header } from "../../Components/layout/Header";
import { Nav } from "../../Components/layout/Nav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table } from "react-bootstrap";

export const Home = () =>  {
    return(
        <>
        <Header />
            <section className="mt-3 vh-100">
                <Container fluid>
                
                <Row >
            <Col xs={1}>
            <Nav />

            </Col>
            <Row className="justify-content-md-end">
                <Col xs={5}>
                    <center>
                    <input type="date" name="" id="" />
                        <div>
                        <p className="text-black text-xl"> Valor do dia:</p>
                        <p className="text-black pt-2">R$90,00</p>
                        </div>
                        <div>
                        <p className="text-black text-xl"> Valor mensal:</p>
                        <p className="text-black pt-2">R$90,00</p>
                        </div>
                    </center>
                </Col>
            <Col xs={5} className="justify-content-md-center">
                <center>
                    <h5>Vendas do dia</h5>

                
                <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark Otto</td>
          <td>45,00</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob Thornton</td>
          <td>45,00</td>
        </tr>
      </tbody>
    </Table>
    </center>
            </Col>
            </Row>
             </Row>
                </Container>
            </section>
        </>
    );
};