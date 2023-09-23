import api from './api';

export interface PostParams {
    texto: string;
}


const postsService = {
    publish: async (params: PostParams) => {
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
    }
}

export default postsService;