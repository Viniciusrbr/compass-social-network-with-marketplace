import { Outlet } from "react-router-dom";
import Image from "../../assets/images/login-side-image.jpg"
import { BackgroundImage, Container, ImageWrapper } from "./styles";

function LoginMainLayout() {
    return (
        <Container>
            <Outlet />

            <ImageWrapper>
                <BackgroundImage src={Image} alt="Background" />
            </ImageWrapper>

        </Container>
    );
}

export default LoginMainLayout;
