import React,{useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../Components/Button";
import { Header } from "../../../Components/layout/Header";
import { api } from "../../../service/api";
import { ListProdutos, IProduto } from "../../../service/api";

export const ItemProduto = () => {
    const navigate = useNavigate();

    const {id} = useParams()
    const [tab, setTable] = useState({
        Nome: '', 
        Image: '',
        Descricao: '',
        id: 0,
    })

    const edit = (id: number) => {
        navigate(`/Edit-Produto/${id}`) 
    }

    const delet = (id: number) => {
        api.delete(`/produtos/${id}`)
        navigate('/lista-produtos')
    }

    useEffect(() => {
        api.get(`/produtos/${id}`)
        .then((response) => {
            console.log(response.data)
            setTable( response.data)
        })
        .catch(()=> {
            alert('Erro ao consultar ao BD');
        })
    }, [id]);


    return(
        <>
        <Header/>
            <Container>
                <Row>
                    <Col>
                        <main>
                            <section className="d-flex justify-content-between mt-3">
                                <Col xs={6}>
                                <div className="" style={{}}>
                                    <img className="w-100 h-50" src={tab.Image} alt="" />
                                </div>
                                </Col>
                                <Col xs={4}>
                                <div className="text-center pt-4">
                                    <h5>{tab.Nome}</h5>
                                    <p className="mt-5">{tab.Descricao}</p>
                                    <center>
                                        <div className="d-flex flex-column py-3">
                                            <button className="btn text-white mb-4" style={{background: '#4E6471'}} onClick={() => edit(tab.id)}>Editar</button>

                                            <button className="btn btn-danger" onClick={() => delet(tab.id)}>Excluir</button>
                                        </div>
                                    </center>
                                </div>
                                </Col>
                            </section>
                        </main>
                    </Col>
                </Row>
            </Container>
        </>
    );
}


