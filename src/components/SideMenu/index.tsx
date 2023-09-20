import compassLogo from "../../assets/images/logo-white.png"
import { SideMenuSection } from "./styles"

interface SideMenuProps {
    isOpen: boolean;
  }

function SideMenu({ isOpen }: SideMenuProps) {

  return (
    <SideMenuSection  className={isOpen ? "open" : ""}>
        <img src={compassLogo} alt="" />

        <ul>
            <li><a href="#">Página Inicial</a></li>
            <li><a href="#">Meu Perfil</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Sair</a></li>
        </ul>

    </SideMenuSection>
  )
}

export default SideMenu