import { useState } from "react"
import EditProfileModal from "../../EditProfileModal"
import { Container, UserThumbnailInfo, ProfileAndName, ThumbnailImg } from "./styles"
import ThumbImage from "../../../assets/images/userThumb.jpg"

function UserThumbnail() {
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
              <h1>Eduardo Perreira</h1>
              <p>UI/UX Designer</p>
            </div>
          </ProfileAndName>

          <button onClick={showModal}>Editar Perfil</button>
        </UserThumbnailInfo>

      {modalOpen && <EditProfileModal modalOpen={showModal} />}
    </Container>
  )
}

export default UserThumbnail