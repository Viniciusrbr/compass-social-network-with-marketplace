import { useState } from "react";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import { Container } from "./styles";

function HomeMainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <SideMenu isOpen={isMenuOpen} />
      <Header onMenuToggle={toggleMenu} />
    </Container>
  );
}

export default HomeMainLayout;
