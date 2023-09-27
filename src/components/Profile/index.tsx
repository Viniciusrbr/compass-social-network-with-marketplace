import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import UserContent from "./UserContent";
import UserThumbnail from "./UserThumbnail";
import UserService from "../../services/UserService";

function Profile() {

  const { userId } = useParams<{ userId?: string }>();
  const [userData, setUserData] = useState(null);

  
    useEffect(() => {
      if (userId) {
        UserService.GetUserById(userId).then((response) => {
          setUserData(response.data);
        });
      }
    }, [userId])
  
   console.log(userData)

  return (
    <Container>

      <UserThumbnail  userData={userData} />
      <UserContent  userData={userData} />

    </Container>
  );
}

export default Profile;
