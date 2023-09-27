import { CommentsSection, Container, LocalPost, PostContent, PostHeader, PostHeaderContent, PostImage, TimePost } from './styles'
import like from "../../assets/comment-icons/like.svg";;
import comment from "../../assets/comment-icons/comment.svg";
import share from "../../assets/comment-icons/share.svg";

import camera from "../../assets/comment-icons/photo.svg";
import image from "../../assets/comment-icons/image.svg";
import clip from "../../assets/comment-icons/clipper.svg";
import MapPing from "../../assets/comment-icons/location.svg";
import emoji from "../../assets/comment-icons/emojis.svg";
import LittleClock from "../../assets/icons/LittleClock.svg";

import { useEffect, useState } from 'react';
import postsService, { ComentarioType, PostType } from '../../services/PostsService';

function UserPost() {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [comments, setComments] = useState<{ [postId: number]: ComentarioType[] }>({});

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await postsService.getPosts();
                if (response && response.status === 200) {
                    const fetchedPosts = response.data;

                    // Ordena os posts pelo campo data_criacao em ordem decrescente (do mais recente para o mais antigo)
                    fetchedPosts.sort((a: any, b: any) => {
                        const dateA: any = new Date(a.data_criacao);
                        const dateB: any = new Date(b.data_criacao);
                        return dateB - dateA;
                    });

                    // Faz um map dos comentários para um objeto com chave sendo o id do post
                    const commentsMap: { [postId: number]: ComentarioType[] } = {};
                    fetchedPosts.forEach((post: PostType) => {
                        commentsMap[post.id] = post.comentarios;
                    });

                    setPosts(fetchedPosts);
                    // Atualiza o estado dos comentários juntando com os comentários que ja existem
                    setComments((prevComments) => ({
                        ...prevComments,
                        ...commentsMap,
                    }));

                } else {
                    console.error('Erro ao buscar posts da API');
                }
            } catch (error) {
                console.error('Erro ao buscar posts da API', error);
            }
        }
        fetchPosts();
    }, []);

    function getTimeDifference(date1: Date, date2: Date): string {
        const diffInMilliseconds = date1.getTime() - date2.getTime();
        const seconds = Math.floor(diffInMilliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} ${days === 1 ? 'dia' : 'dias'} atrás`;
        } else if (hours > 0) {
            return `${hours} ${hours === 1 ? 'hora' : 'horas'} atrás`;
        } else if (minutes > 0) {
            return `${minutes} ${minutes === 1 ? 'minuto' : 'minutos'} atrás`;
        } else {
            return `${seconds} ${seconds === 1 ? 'segundo' : 'segundos'} atrás`;
        }
    }

    return (
        <>
            {
                posts.map((post: PostType) => (
                    <Container key={post.id}>

                        <PostHeader >
                            <PostHeaderContent >
                                <img className='profileImg' src="https://avatars.githubusercontent.com/u/59899998?v=4" alt="foto de perfil do usuario" />
                                <div>
                                    <h1>{post.usuario.nome}</h1>
                                    <p> <img className='clock' src={LittleClock} alt="" />
                                        <TimePost>{getTimeDifference(new Date(), new Date(post.data_criacao))}</TimePost>
                                        <LocalPost>{post.localizacao}</LocalPost>
                                    </p>
                                </div>
                            </PostHeaderContent>
                            <PostContent>{post.texto}</PostContent>
                            <PostImage src={post.imagem} />
                        </PostHeader>

                        <div className="post-options">
                            <p><img src={like} />Curtiu <span>{post.likes}</span></p>
                            <p><img src={comment} />Comentários</p>
                            <p><img src={share} />Compartilhar</p>
                        </div>

                        <div className="post-add-comment">
                            <img src="https://avatars.githubusercontent.com/u/59899998?v=4" alt="" />

                            <div className="input-section">
                                <input type="text" placeholder="Tem algo a dizer?" />

                                <div className="icons">
                                    <img src={camera} alt="" />
                                    <img src={image} alt="" />
                                    <img src={clip} alt="" />
                                    <img src={MapPing} alt="" />
                                    <img src={emoji} alt="" />
                                </div>
                            </div>
                        </div>

                        {comments[post.id] && (
                            <CommentsSection>
                                <h3>Todos os comentários</h3>
                                {comments[post.id].map((comment: ComentarioType) => (
                                    <div key={comment.id}>
                                        <img src="https://avatars.githubusercontent.com/u/59899998?v=4" alt="" />
                                        <p>
                                            <span>{comment.usuario.nome}:</span> {comment.texto}
                                        </p>
                                    </div>
                                ))}
                            </CommentsSection>
                        )}

                    </Container>
                ))
            }
        </>
    )
}

export default UserPost