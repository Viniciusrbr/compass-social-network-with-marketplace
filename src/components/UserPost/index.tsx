import { Container, MoreOptionsButton, PostContent } from './styles'
import MoreOptions from "../../assets/icons/MoreOptions.svg"
import like from "../../assets/comment-icons/like.svg";;
import comment from "../../assets/comment-icons/comment.svg";
import share from "../../assets/comment-icons/share.svg";

import camera from "../../assets/comment-icons/photo.svg";
import image from "../../assets/comment-icons/image.svg";
import clip from "../../assets/comment-icons/clipper.svg";
import MapPing from "../../assets/comment-icons/location.svg";
import emoji from "../../assets/comment-icons/emojis.svg";

function UserPost() {
    return (
        <Container>
            <div className="post-header">

                <div className="user-info">

                    <img src="https://avatars.githubusercontent.com/u/59899998?v=4" alt="" />

                    <div>
                        <h1>Eduardo Perreira</h1>
                        <p>UI/UX Designer</p>
                    </div>
                </div>
                <MoreOptionsButton>
                    <img src={MoreOptions} alt="" />
                </MoreOptionsButton>

            </div>

            <PostContent>Vou abrir um canal no youtube</PostContent>

            <div className="post-options">
                <p><img src={like} />Curtiu</p>
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
        </Container>
    )
}

export default UserPost