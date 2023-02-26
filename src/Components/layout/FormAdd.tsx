import React,{ FormEvent, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ListProdutos } from "../../service/api";

import { LabelInput } from "../LabelInput";
type Props = {
    onAdd: (dat: ListProdutos) => void;
}

export const FormAdd = ({onAdd}: Props) => {
    const navigate = useNavigate();

    const [Quantidade, setQuantidade] = useState('');
    const [QMinima, setQMinima] = useState('');
    const [Valor, setValor] = useState('');
    const [Marca, setMarca] = useState('');
    const [Nome, setNome] = useState('');
    const [Descricao, setDescricao] = useState('');
    const [Image, setImg] = useState('');
    
    const handleAddDados = async (e:FormEvent) => {
            e.preventDefault();
            if(Quantidade && QMinima && Valor && Marca && Nome && Descricao && Image) {
                onAdd({
                    Quantidade, QMinima, Valor, Marca, Nome, Descricao, Image, id: 0
                });
                navigate('/lista-produtos');
            } else {
                alert("Preencha os campos!");
                navigate('/cadastro-Produto');
            }
    }
    
    return(
        <Container >
                <Row className="justify-content-md-center" >
                    <Col xs={6}>
                        <div className="text-white" style={{background:'#111827', padding: 40}}>
                        <form onSubmit={handleAddDados}>
                            <LabelInput 
                                type='number'
                                name="quantidade"
                                label="Quantidade"
                                id="quant"
                                htmlFor="quant"
                                onChange={newValue => setQuantidade(newValue)}    
                                value={Quantidade}
                            />
                            <LabelInput 
                                type='number'
                                name="qminima"
                                label="Q-Minima"
                                id="qmin"
                                htmlFor="qmin"
                                onChange={newValue => setQMinima(newValue)}    
                                value={QMinima}
                            />
                            <LabelInput 
                                type='number'
                                name="valor"
                                label="Valor"
                                id="val"
                                htmlFor="val"
                                onChange={newValue => setValor(newValue)}    
                                value={Valor}
                            />
                                
                            <LabelInput 
                                type='text'
                                name="marca"
                                label="Marca"
                                id="marca"
                                htmlFor="marca"
                                onChange={newValue => setMarca(newValue)}    
                                value={Marca}
                            />

                            <LabelInput 
                                type='text'
                                name="nome"
                                label="Nome"
                                id="nome"
                                htmlFor="nome"
                                onChange={newValue => setNome(newValue)}    
                                value={Nome}
                            />
                             <label htmlFor="desc">
                                <div>
                                <span>Descrição</span>
                                </div>
                                <textarea 
                                name="descricao" id="desc"
                                rows={3} cols={60}
                                onChange={e => setDescricao(e.target.value)}    
                                value={Descricao}>
                                </textarea>
                            </label>

                                <LabelInput 
                                type='file'
                                name="img"
                                label="Imagem"
                                id="img"
                                htmlFor="img"
                                onChange={newValue => setImg(newValue)}    
                                value={Image}
                            />
                            <button type="submit"  className="mt-2 btn btn-success">
                                Enviar
                            </button>
                        </form>         
                        </div>    
                    </Col>
                </Row>
            </Container>
    );
}