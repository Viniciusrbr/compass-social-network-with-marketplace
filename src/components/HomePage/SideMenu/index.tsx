import { Link } from "react-router-dom";
import compassLogo from "../../../assets/images/logo-white.png"
import { SideMenuSection } from "./styles"

interface SideMenuProps {
    isOpen: boolean;
  }

function SideMenu({ isOpen }: SideMenuProps) {

  return (
    <SideMenuSection  className={isOpen ? "open" : ""}>
        <img src={compassLogo} alt="" />

        <ul>
            <li><Link to="/home">Página Inicial</Link></li>
            <li><Link to="profile">Meu Perfil</Link></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Sair</a></li>
        </ul>

    </SideMenuSection>
  )
}

export default SideMenu