import api from './api';

export interface RegisterParams {
    nome: string;
    usuario: string;
    data_nascimento: string;
    email: string;
    password: string;
    confirmar_senha: string;
}

export interface LoginParams {
    usuario: string;
    password: string;
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

    login: async (params: LoginParams) => {
        const res = await api.post("/login", params).catch(error => {
            if (error.response.status === 400 || error.response.status === 401) {
                return error.response;
            }
            return error;
        });

        if (res.status === 200) {
            sessionStorage.setItem("user-token", res.data.token); // Salva o token no sessionStorage
            sessionStorage.setItem("id", res.data.usuario.id); // Salva o id do usuario no sessionStorage
        }

        return res;
    }

};


export default authServise;