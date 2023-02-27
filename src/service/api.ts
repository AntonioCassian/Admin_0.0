import axios from 'axios';

export interface ListProdutos {
    id: number;
    Quantidade: string;
    QMinima: string;
    Valor: string;
    Marca: string;
    Nome?: string;
    Descricao: string;
    Image: string;
    isCompleted?: boolean;
}
export interface IListVendas {
    id: number;
    comprador: string;
    qprod: number;
    total: number;
    marca: string;
    tamanho: string;
    situacao: boolean;
    image: string
}
export interface IClientes {
    id: number;
    nome: string;
    cpf: string;
    email: number;
    senha: string;
}
export type IProduto = {
    id: number;
    Valor: number;
    Marca: string;
    Nome: string;
    Descricao: string;
    Image: string;
}

export const api = axios.create({
    baseURL: 'http://localhost:3333'
})
/**
 * export const Api = {
    getAll: async(): Promise<ListProdutos[] | ErrorMsg > => { 
        try{
            let response = await http.get(`/produtos`);
            return response.data;
        } catch (error: any) {
            return new ErrorMsg(error.message || 'Error ao consutar os Produtos.' );
        }
    },
    getAllId: async(id: number): Promise<ListProdutos | ErrorMsg > => { 
        try{
            let { data } = await http.get(`/produtos/${id}`);
            return data;
        } catch (error: any) {
            return new ErrorMsg(error.message || 'Error ao consutar o Produto.' );
        }
    },
    AddNew: async(dataCreate: Omit<ListProdutos, 'id'>): Promise<ListProdutos | ErrorMsg > => { 
        try{
            let { data } = await http.post<any>(`/produtos`, dataCreate);
            return data;
        } catch (error: any) {
            return new ErrorMsg(error.message || 'Error ao criar Produto.' );
        }
    },
    UpdateById: async(id: number): Promise<ListProdutos | ErrorMsg > => { 
        try{
            let { data } = await http.put(`/produtos/${id}`);
            return data;
        } catch (error: any) {
            return new ErrorMsg(error.message || 'Error ao atualizar os Produto.' );
        }
    },
    DeleteById: async(id: number): Promise<undefined | ErrorMsg > => { 
        try{
            let { data } = await http.delete(`/produtos/${id}`);
            return data;
        } catch (error: any) {
            return new ErrorMsg(error.message || 'Error ao Apagar Produto.' );
        }
    }
}


 */
/*
* async(Quantidade: string, QMinima: string, Valor: string, Marca: string, Ação: string, Descricao: string, Image: string) => {
       let response = await http.post('/produtos',{
        Quantidade, QMinima, Valor, Marca, Ação, Descricao, Image
    });
        return response.data;
    },
 */