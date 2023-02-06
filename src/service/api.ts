import axios from 'axios';
import { Table } from '../types/Table';
const http = axios.create({
    baseURL: 'http://localhost:3333'
})
export const api = {
    getAllPosts: async() => { 
       let response = await http.get(`/produtos`);
       return response.data;
    },
    getAllId: async(id:number) => { 
        let response = await http.get(`/produtos/${id}`);
        return response.data;
    },
    AddNew: async(Quantidade: string, QMinima: string, Valor: string, Marca: string, Ação: string, Descricao: string, Image: string) => {
       let response = await http.post('/produtos',{
        Quantidade, QMinima, Valor, Marca, Ação, Descricao, Image
    });
    return response.data;
    }
}