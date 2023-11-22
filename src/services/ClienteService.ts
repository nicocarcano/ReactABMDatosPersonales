import { Cliente } from "../types/Cliente";

const BASE_URL = 'http://localhost:10000/api/v1';

  

export const ClienteService = {

    getClientes:async (): Promise<Cliente[]> => {
        const response = await fetch (`${BASE_URL}/clientes/datos?email=maria.gonzalez@example.com`);
        const data = await response.json();
        return data;
    },

    updateCliente:async (id:number, cliente: Cliente):Promise<Cliente> => {
        const response = await fetch(`${BASE_URL}/clientes/${id}`,{
            method:"PUT",
            headers: {
            'Content_Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });
        
        const data = await response.json();
        return data;
    }

}