import React, { useEffect } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import { Header } from "../../../Components/layout/Header";
import { ListProdutos } from "../../../service/api";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export const EditProduto = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const  {register, handleSubmit, formState: {errors}, reset } = useForm<ListProdutos>()

    const onUpdate = ((data: any) =>  {
        axios.put(`http://localhost:3333/produtos/${id}`, data)
        .then(() => {
            alert("Deu certo!");
            navigate('/lista-produtos');
        })
        .catch((e) => {
            alert("Deu errado!");
            console.log('Error:', e)
        })
        console.log(onUpdate);
    })
    
    useEffect(() => {
        axios.get(`http://localhost:3333/produtos/${id}`)
        .then((response) => {
            reset(response.data);
        })
        .catch(()=> {
            alert("ERRRRRRROR!")
        })
    }, [id]);


        return(
        <>
            <Header />
              <Container>
              <Row className="justify-content-md-center">
                      <Col xs={6}>
                        <Form onSubmit={handleSubmit(onUpdate)}>
                        <Form.Group className="mb-3" controlId="quant">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control type="number" 
                            id='quant'
                            {...register("Quantidade",{required: true})}
                            />
                            {errors.Quantidade && (<div className="text-danger">Quantidade não preenchida</div>)}
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="qmin">
                            <Form.Label>Q-Minima</Form.Label>
                            <Form.Control 
                            id="qmin"
                            type='number'
                            {...register("QMinima",{required: true})}
                            />
                            {errors.QMinima && (<div className="text-danger">Quantidade Minima  não preenchida</div>)}
                          </Form.Group>
            
                          <Form.Group className="mb-3" controlId="valor">
                            <Form.Label>Valor</Form.Label>
                            <Form.Control 
                            id="valor"
                            type='number'
                            {...register("Valor",{required: true})}
                            />
                            {errors.Valor && (<div className="text-danger">Valor não preenchida</div>)}
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome Produto</Form.Label>
                            <Form.Control 
                            id="nome"
                            type='string'
                            {...register("Nome",{required: true})}
                            />
                            {errors.Nome && (<div className="text-danger">Nome não preenchida</div>)}
                          </Form.Group>

                        <Form.Group className="mb-3" controlId="marca">
                          <Form.Label>Marca</Form.Label>
                          <Form.Control 
                          id="marca"
                          type='string'
                          {...register("Marca",{required: true})}
                          />
                          {errors.Marca && (<div className="text-danger">Marca não preenchida</div>)}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="desc">
                          <Form.Label> Descrição</Form.Label>
                          <Form.Control
                          id='desc'
                          as="textarea" 
                          {...register("Descricao",{required: true})} 
                          />
                          {errors.Descricao && (<div className="text-danger">Descrição não preenchida</div>)}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="img">
                          <Form.Label> Imagem</Form.Label>
                          <Form.Control
                          id='img'
                          type="file"
                          {...register("Image")}
                          />
                          {errors.Image && (<div className="text-danger" >Image não preenchida</div>)}
                        </Form.Group>
                        <button type="submit" >
                            Atualizar
                        </button>
                        </Form>
                      </Col>
                  </Row>
              </Container>
        </>
    )
}


