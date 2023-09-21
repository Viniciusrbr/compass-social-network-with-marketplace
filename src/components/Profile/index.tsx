import { Container, PostCard, PostContent, UserContent, UserInfo, UserPosts, UserPostsOptions, UserThumbnail, UserThumbnailInfo } from "./styles"
import ThumbImage from "../../assets/images/userThumb.jpg"
import UserProfile from "../../assets/userInfo-icons/UserProfile.svg"
import Cake from "../../assets/userInfo-icons/Cake.svg"
import MapPin from "../../assets/userInfo-icons/MapPin.svg"
import Message from "../../assets/userInfo-icons/Message.svg"
import Phone from "../../assets/userInfo-icons/Phone.svg"

import MoreOptions from "../../assets/icons/MoreOptions.svg"

import like from "../../assets/comment-icons/like.svg";;
import comment from "../../assets/comment-icons/comment.svg";
import share from "../../assets/comment-icons/share.svg";

import camera from "../../assets/comment-icons/photo.svg";
import image from "../../assets/comment-icons/image.svg";
import clip from "../../assets/comment-icons/clipper.svg";
import MapPing from "../../assets/comment-icons/location.svg";
import emoji from "../../assets/comment-icons/emojis.svg";

function Profile() {
  return (
    <Container>
      <UserThumbnail>
        <img className="userThumb" src={ThumbImage} alt="" />

        <UserThumbnailInfo>
          <img src="https://avatars.githubusercontent.com/u/59899998?v=4" alt="" />

          <div>
            <h1>Eduardo Perreira</h1>
            <p>UI/UX Designer</p>
          </div>
          <button>Editar Perfil</button>
        </UserThumbnailInfo>
      </UserThumbnail>

      <UserContent>

        <UserInfo>
          <ul>
            <h2>Sobre</h2>
            <li><img src={UserProfile} />Masculino</li>
            <li><img src={Cake} />Nascido em 26 de Junho, 1980</li>
            <li><img src={MapPin} />2239  Hog Camp Road Schaumburg</li>
            <li><img src={Message} />charles5182@ummoh.com</li>
            <li><img src={Phone} />(33) 75700-5467</li>
          </ul>
        </UserInfo>

        <UserPosts>
          <UserPostsOptions>
            <p>Followers</p>
            <p>Following</p>
            <p>Posts</p>
          </UserPostsOptions>

          <PostCard>

            <div className="post-header">

              <div className="user-info">

                <img src="https://avatars.githubusercontent.com/u/59899998?v=4" alt="" />

                <div>
                  <h1>Eduardo Perreira</h1>
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <img src={MoreOptions} alt="" />

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
          </PostCard>

        </UserPosts>

      </UserContent>

    </Container>
  )
}

export default Profile