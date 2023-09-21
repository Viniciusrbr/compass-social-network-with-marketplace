import api from './api';

export interface RegisterParams {
    nome: string;
    usuario: string;
    data_nascimento: string;
    email: string;
    password: string;
    confirmar_senha: string;
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