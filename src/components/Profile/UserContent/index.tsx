import { UsuarioType } from '../../../services/UserService';
import UserPost from '../../UserPost'
import UserInfo from '../UserInfo'
import { Container, UserPosts, UserPostsOptions } from './styles'

interface UserContentProps {
  userData: UsuarioType | null; // Define the prop type
}

function UserContent({ userData }: UserContentProps) {

  return (
    <Container>

      <UserInfo userData={userData} />

      <UserPosts>
        <UserPostsOptions>
          <p>Followers</p>
          <p>Following</p>
          <p>Posts</p>
        </UserPostsOptions>

        <UserPost />

      </UserPosts >

    </Container>
  )
}

export default UserContent