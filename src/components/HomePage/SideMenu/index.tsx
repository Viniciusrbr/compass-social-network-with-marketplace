import { Link, useNavigate } from "react-router-dom";
import compassLogo from "../../../assets/images/logo-white.png"
import { SideMenuSection } from "./styles"

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const navigate = useNavigate();

  const handleLinkClick = () => { onClose() }

  const cleanToken = () => {
    sessionStorage.removeItem("user-token")
    navigate("/")
  }

  return (
    <SideMenuSection className={isOpen ? "open" : ""}>
      <img src={compassLogo} alt="" />

      <ul>
        <li><Link to="/home" onClick={handleLinkClick}>Página Inicial</Link></li>
        <li><Link to="profile" onClick={handleLinkClick}>Meu Perfil</Link></li>
        <li><Link to="marketplace" onClick={handleLinkClick}>Marketplace</Link></li>
        <li><Link to="/" onClick={cleanToken}>Sair</Link></li>
      </ul>

    </SideMenuSection>
  )
}

export default SideMenu