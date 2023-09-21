import { Container, UserContent, UserInfo, UserPosts, UserPostsOptions, UserThumbnail, UserThumbnailInfo } from "./styles"
import ThumbImage from "../../assets/images/userThumb.jpg"
import UserProfile from "../../assets/userInfo-icons/UserProfile.svg"
import Cake from "../../assets/userInfo-icons/Cake.svg"
import MapPin from "../../assets/userInfo-icons/MapPin.svg"
import Message from "../../assets/userInfo-icons/Message.svg"
import Phone from "../../assets/userInfo-icons/Phone.svg"

import UserPost from "../UserPost"

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

          <UserPost />

        </UserPosts>

      </UserContent>

    </Container>
  )
}

export default Profile