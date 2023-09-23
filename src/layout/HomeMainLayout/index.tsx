import { useState } from "react";
import Header from "../../components/HomePage/Header";
import SideMenu from "../../components/HomePage/SideMenu";
import { Container } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function HomeMainLayout() {
  const navigate = useNavigate();

  /*
  useEffect(() => {
    if (!sessionStorage.getItem("user-token")) {
      navigate("/")
    }
  }, []);*/

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <Container>
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />

      <main>
        <Header onMenuToggle={toggleMenu} />
        <Outlet />
      </main>
    </Container>

  );
}

export default HomeMainLayout;
