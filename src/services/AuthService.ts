import api from './api';

export interface RegisterParams {
    nome: string;
    usuario: string;
    nascimento: string;
    email: string;
    senha: string;
}

const authServise = {
    register: async (params: RegisterParams) => {
        const res = await api.post("/register", params).catch(error => {
            if (error.response.status === 400) {
                return error.response;
            }

            return error;
        })

        return res;
    },
};


export default authServise;