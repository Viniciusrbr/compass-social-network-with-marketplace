import { useState } from "react";
import Header from "../../components/HomePage/Header";
import SideMenu from "../../components/HomePage/SideMenu";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";

function HomeMainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <Container>
      <SideMenu isOpen={isMenuOpen} />

      <main>
        <Header onMenuToggle={toggleMenu} />
        <Outlet />
      </main>
    </Container>

  );
}

export default HomeMainLayout;
