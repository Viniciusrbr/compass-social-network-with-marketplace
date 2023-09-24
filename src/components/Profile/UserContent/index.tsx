import UserPost from '../../UserPost'
import UserInfo from '../UserInfo'
import { Container, UserPosts, UserPostsOptions } from './styles'

function UserContent() {
  return (
    <Container>

      <UserInfo />

      <UserPosts>
        <UserPostsOptions>
          <p>Followers</p>
          <p>Following</p>
          <p>Posts</p>
        </UserPostsOptions>

        <UserPost />

      </UserPosts>

    </Container>
  )
}

export default UserContent