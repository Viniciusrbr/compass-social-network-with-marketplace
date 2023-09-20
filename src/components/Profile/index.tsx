import { Container, UserContent, UserInfo, UserPosts, UserThumbnail, UserThumbnailInfo } from "./styles"
import ThumbImage from "../../assets/images/userThumb.jpg"

function Profile() {
  return (
    <Container>
      <UserThumbnail>
        <img className="userThumb" src={ThumbImage} alt="" />


        <UserThumbnailInfo>
          <div>
            <h1>Eduardo Perreira</h1>
            <p>UI/UX Designer</p>
          </div>
          <button>Editar Perfil</button>
        </UserThumbnailInfo>




      </UserThumbnail>

      <UserContent>

        <UserInfo>

        </UserInfo>

        <UserPosts>

        </UserPosts>

      </UserContent>

    </Container>
  )
}

export default Profile