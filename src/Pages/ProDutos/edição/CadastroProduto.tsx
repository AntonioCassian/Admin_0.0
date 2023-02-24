import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormAdd } from "../../../Components/layout/FormAdd";
import { Header } from "../../../Components/layout/Header";
import { api, ListProdutos} from "../../../service/api";

export const CadastroProduto = () => {
    const [Tab, setTab] = useState<ListProdutos>();
    const navigate = useNavigate();

    
    const handleAdd = async (dat:ListProdutos) => {
            api.post('/produtos',dat)
            .then((result) => {
                setTab(result.data);
            })
            .catch(() => {
                alert('Erro ao criar, não está conectado ao Banco de Dados!');
            })
        }

    
    return(
        <>
            <Header />
            <FormAdd onAdd={handleAdd} />
        </>
    )
}