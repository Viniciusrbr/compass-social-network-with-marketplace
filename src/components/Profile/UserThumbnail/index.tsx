import { useEffect, useState } from "react"
import EditProfileModal from "../../EditProfileModal"
import { Container, UserThumbnailInfo, ProfileAndName, ThumbnailImg } from "./styles"
import ThumbImage from "../../../assets/images/userThumb.jpg"
import { OrangeButton } from "../../../layout/OrangeButton"
import UserService from "../../../services/UserService"

function UserThumbnail() {
  const [modalOpen, setModalOpen] = useState(false)
  const [userName, setUserName] = useState("");

  const showModal = () => {
    setModalOpen(!modalOpen)
  }

  useEffect(() => {
    UserService.LoggedUser().then((response) => {
        setUserName(response.data.nome);
    });
  }, []);

  return (
    <Container>
      <ThumbnailImg src={ThumbImage} />

        <UserThumbnailInfo>
          <ProfileAndName>
          <img src="https://avatars.githubusercontent.com/u/59899998?v=4" />

            <div>
              <h1>{userName}</h1>
              <p>UI/UX Designer</p>
            </div>
          </ProfileAndName>

          <OrangeButton onClick={showModal}>Editar Perfil</OrangeButton>
        </UserThumbnailInfo>

      {modalOpen && <EditProfileModal modalOpen={showModal} />}
    </Container>
  )
}

export default UserThumbnail