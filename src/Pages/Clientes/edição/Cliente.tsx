import React,{useEffect, useState}from "react";
import { Container,Row, Col, Figure, Alert } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../../Components/layout/Header"
import { api } from "../../../service/api";

export const ViewCliente = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        nome: '', cpf: '', cidade: '', bairro: '', uf: '', n: 0, id: 0
    })

    const {id} = useParams();
    const dele = (id: number) => {
        api.delete(`/clientes/${id}`)
        .then(response => {
            setData(response.data);
            navigate('/clientes')
        })
    }
    useEffect(() => {
        api.get(`/clientes/${id}`)
        .then(response => {
            setData(response.data)
        })
        .catch(() => {
            alert('Erro ao Consultar BD!')
        });
    }, [id])
    return(
        <>
        <Header />
        <Container>
            <Row>
                <Col className="mt-3">
                    <section>
                        <center className="d-flex flex-column">
                        <Figure>
                        <Figure.Image
                            width={180}  
                            src="https://imgcentauro-a.akamaihd.net/600x600/95847031/camiseta-nike-dry-academy-21-top-masculina-img.jpg" 
                            alt=""
                            roundedCircle
                            />
                        </Figure>
                        <h5>{data.nome}</h5>
                        <div className="d-flex flex-column">
                            <span>
                                <strong>Cpf:</strong> {data.cpf}
                            </span>
                            <span>
                                <strong>data de nascimento:</strong>23/04/2001
                            </span>
                            <span>
                                <strong>Cidade:</strong> {data.cidade}
                            </span>
                            <span>
                                <strong>Bairro:</strong> {data.bairro}
                            </span>
                            <span>
                                <strong>UF:</strong> {data.uf}
                            </span>
                            <span>
                                <strong>N:</strong> {data.n}
                            </span>
                            
                            <span>
                                <strong>Logadouro:</strong> Casa
                            </span>
                        </div>
                            <center>
                                <button className="btn btn-danger mt-3" style={{width: '40%'}} onClick={() => dele(data.id)}>
                                    Cancelar Conta
                                </button>
                            </center>
                        </center>
                    </section>
                </Col>
            </Row>
        </Container>
        </>
    )
}