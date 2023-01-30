import { ApiException } from "../ErrorException";
import { Api } from "../apiConfig";
import { Table } from "../../../types/Table";

const getAll = async (): Promise<Table[] | ApiException> => {
    try{
        const { data } = await Api().get('/produtos');
        return data;
    } catch(e:any) {
        return new ApiException(e.message || 'Error ao Consultar O BD.')
    }
};

const getById = async (id:number): Promise<Table | ApiException> => {
    try{
        const { data } = await Api().get(`/produtos/${id}`);
        return data;
    } catch(e:any) {
        return new ApiException(e.message || 'Error ao Consultar o registro.')
    }
};

const create = async (dataToCreate: Omit<Table, 'id'>): Promise<Table | ApiException> => {
    try{
        const { data } = await Api().post<any>('/produtos', dataToCreate);
        return data;
    } catch(e:any) {
        return new ApiException(e.message || 'Error ao Criar O Table.')
    }
};

const updateById = async (id: string, dataToUpdate:Table): Promise<Table | ApiException> => {
    try{
        const { data } = await Api().put(`/produtos/${id}`, dataToUpdate);
        return data;
    } catch(e:any) {
        return new ApiException(e.message || 'Error ao atualizar Table.')
    }
};

const deleteById = async (id: string): Promise<undefined | ApiException> => {
    try{
        await Api().get(`/produtos/${id}`);
        return undefined;
    } catch(e:any) {
        return new ApiException(e.message || 'Erro ao apagar Table.')
    }
};

export const TableServices= {
    getAll,
    create,
    getById,
    updateById,
    deleteById
};