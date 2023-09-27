import api from "./api";

export interface UsuarioType {
    id: string;
    nome: string;
    data_nascimento: string;
    email: string;
    sexo: string;
    endereco: string;
    telefone: string;
    profissao: string;
    data_criacao: string;
    data_alteracao: string;
}

const UserService = {

    LoggedUser: async () => {
        const token = sessionStorage.getItem("user-token");
        const id = sessionStorage.getItem("id");

        const res = await api.get(`/usuarios/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error) => {
            return error.response;
        });

        return res;
    },

    GetAllUsers: async () => {
        const token = sessionStorage.getItem("user-token");

        const res = await api.get("/usuarios", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error) => {
            return error.response;
        });

        return res;
    },

    GetUserById: async (id: string) => {
        const token = sessionStorage.getItem("user-token");

        const res = await api.get(`/usuarios/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error) => {
            return error.response;
        });

        return res;
    },
}

export default UserService;



