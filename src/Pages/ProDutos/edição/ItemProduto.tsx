import React,{useEffect, useState} from "react";
import { Table } from "../../../types/Table";

import { Header } from "../../../Components/layout/Header";
import { api } from "../../../service/api";

export const ItemProduto = (id: number) => {
    const [data, setData] = useState<Table[]>([]);
    
    useEffect(() => {
        const loadPost = async () => {
            let json = await api.getAllId(id);
            setData(json);
        }
        loadPost();
    }, [id]);

   
    return(
        <>
            <Header/>
                <div>
                    <>
                    {data.map((item) => (
                        <div>
                            <div>
                                <img src={item.Image} alt="Camisa" />
                            </div>
                            <p>{item.Descricao}</p>
                        </div>
                    ))}
                    </>
                    <div>
                        <button className="bg-color-red">
                            Editar
                        </button>
                    </div>
                </div>

        </>
    )
}