import { Outlet } from "react-router-dom";
import sideImage from "../../assets/images/login-side-image.jpg"
import { Container } from "./styles";

function LoginMainLayout() {
    return (
        <Container>
            <Outlet />
            <img src={sideImage} alt="" />
        </Container>
    );
}

export default LoginMainLayout;
