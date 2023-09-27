import { UsuarioType } from './UserService';
import api from './api';

export interface ComentarioType {
    id: number;
    usuario_id: string;
    post_id: number;
    texto: string;
    data_criacao: string;
    data_alteracao: string;
    usuario: UsuarioType;
}

export interface PostType {
    id: number;
    usuario_id: string;
    texto: string;
    localizacao: string;
    imagem?: string;
    likes: number;
    data_criacao: string;
    data_alteracao: string;
    usuario: UsuarioType;
    comentarios: ComentarioType[];
}

const postsService = {
    publish: async (params: PostType) => {
        const token = sessionStorage.getItem("user-token");

        const res = await api.post("/posts", {
            headers: {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        }).catch((error) => {
            return error.response;
        });

        return res;
    },

    getPosts: async () => {
        const token = sessionStorage.getItem("user-token");

        const res = await api.get("/posts", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error) => {
            return error.response;
        });

        return res;
    },

    getPostsById: async (id: number) => {
        const token = sessionStorage.getItem("user-token");

        const res = await api.get(`/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).catch((error) => {
            return error.response;
        });

        return res;
    }
}

export default postsService;