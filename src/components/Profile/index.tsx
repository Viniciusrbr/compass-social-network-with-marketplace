import { Container } from "./styles"
import UserContent from "./UserContent"
import UserThumbnail from "./UserThumbnail"

function Profile() {

  return (
    <Container>

      <UserThumbnail />
      <UserContent />

    </Container>
  )
}

export default Profile