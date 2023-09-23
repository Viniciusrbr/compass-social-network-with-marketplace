import { Link } from "react-router-dom";
import compassLogo from "../../../assets/images/logo-white.png"
import { SideMenuSection } from "./styles"

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function SideMenu({ isOpen, onClose }: SideMenuProps) {

  const handleLinkClick = () => { onClose() }

  return (
    <SideMenuSection className={isOpen ? "open" : ""}>
      <img src={compassLogo} alt="" />

      <ul>
        <li><Link to="/home" onClick={handleLinkClick}>Página Inicial</Link></li>
        <li><Link to="profile" onClick={handleLinkClick}>Meu Perfil</Link></li>
        <li><a href="#">Marketplace</a></li>
        <li><a href="#">Sair</a></li>
      </ul>

    </SideMenuSection>
  )
}

export default SideMenu