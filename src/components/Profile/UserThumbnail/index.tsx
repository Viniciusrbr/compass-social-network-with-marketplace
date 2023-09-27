import { useState } from "react"
import EditProfileModal from "../../EditProfileModal"
import { Container, UserThumbnailInfo, ProfileAndName, ThumbnailImg } from "./styles"
import ThumbImage from "../../../assets/images/userThumb.jpg"
import { OrangeButton } from "../../../layout/OrangeButton"
import { UsuarioType } from "../../../services/UserService"

interface UserThumbnailProps {
  userData: UsuarioType | null; // Define the prop type
}

function UserThumbnail({ userData }: UserThumbnailProps) {
  const [modalOpen, setModalOpen] = useState(false)

  const showModal = () => {
    setModalOpen(!modalOpen)
  }



  return (
    <Container>
      <ThumbnailImg src={ThumbImage} />

      <UserThumbnailInfo>
        <ProfileAndName>
          <img src="https://avatars.githubusercontent.com/u/59899998?v=4" />

          <div>
            <h1>{userData?.nome || 'Nome do usuário'}</h1>
            <p>{userData?.profissao || ''}</p>
          </div>
        </ProfileAndName>

        <OrangeButton onClick={showModal}>Editar Perfil</OrangeButton>
      </UserThumbnailInfo>

      {modalOpen && <EditProfileModal modalOpen={showModal} />}
    </Container>
  )
}

export default UserThumbnail