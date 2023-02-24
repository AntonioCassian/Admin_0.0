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
    const [tab, setTable] = useState<IProduto>()
    console.log(id);

    /**
     * const edit = (id: number) => {
        navigate(`/Edit-Produto/${id}`)
    }

    const delet = (id: number) => {
        api.delete(`/produtos/${id}`)
        alert('Removido, Atualize a Pagina!')
        navigate('/lista-produtos')
    }
     */

    useEffect(() => {
        api.get<IProduto>(`/produtos/${id}`)
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
                                    <img className="w-100 h-50" src={"https://img.freepik.com/vetores-premium/maquete-de-t-shirt-masculina-de-vetor-amarelo_292608-200.jpg"} alt="" />
                                </div>
                                </Col>
                                <Col xs={4}>
                                <div className="text-center pt-4">
                                    <h5>Camisa amarela</h5>
                                    <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nesciunt unde asperiores iure voluptas quod adipisci numquam, molestiae maiores, reprehenderit officia enim repudiandae rem. Molestiae reprehenderit eligendi rerum debitis aliquid.</p>
                                    <div className="d-flex py-3">
                                        <div className="d-flex justify-content-center w-100 flex-column mt-5">
                                        <button  className="btn btn-primary mb-2 p-2" >
                                            Editar
                                        </button>
                                        <button className="btn btn-danger  p-2">
                                            Excluir
                                        </button>
                                        </div>
                                    </div>
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


