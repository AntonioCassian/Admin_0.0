import React,{useEffect, useState} from "react";
import { Table } from "../../../types/Table";

import { Header } from "../../../Components/layout/Header";
import { TableServices } from "../../../service/api/Crud/TableService";
import { ApiException } from "../../../service/api/ErrorException";

export const ItemProduto = () => {
    const [tab, setTab] = useState<Table[]>([]);

    useEffect(() => {

    }, []);
    return(
        <>
            <Header/>

            {tab.map((item, index)=>{
                <div key={index}>
                    <div>
                        {item.img}
                    </div>
                </div>
            })}

        </>
    )
}