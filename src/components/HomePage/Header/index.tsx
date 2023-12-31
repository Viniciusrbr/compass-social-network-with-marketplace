import { useEffect, useState } from "react";
import { HeaderSection, OpenMenu, UserInfo } from "./styles";
import OpenMenuIcon from "../../../assets/icons/OpenMenuIcon.svg";
import CloseMenuIcon from "../../../assets/icons/CloseMenuIcon.svg";
import Bell from "../../../assets/icons/Bell.svg";
import World from "../../../assets/icons/GlobeHemisphereEast.svg";
import UserService from "../../../services/UserService";

interface HeaderProps {
  onMenuToggle: () => void;
}

function Header({ onMenuToggle }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const [userName, setUserName] = useState("");

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    onMenuToggle();
  };

  useEffect(() => {
    UserService.LoggedUser().then((response) => {
        setUserName(response.data.nome);
    });
  }, []);

  return (
    <HeaderSection>
      <OpenMenu>
        <button type="button" onClick={handleOpenMenu}>
          {openMenu ? (
            <img src={CloseMenuIcon} alt="Close Menu" />
          ) : (
            <img src={OpenMenuIcon} alt="Open Menu" />
          )}
        </button>
        <p>SocialCompass</p>
      </OpenMenu>

      <UserInfo>
        <img src={World} alt="World Icon" />
        <img src={Bell} alt="Bell Icon" />
        <p>{userName}</p>
        <img
          className="userImg"
          src="https://avatars.githubusercontent.com/u/59899998?v=4"
          alt="User Avatar"
        />
      </UserInfo>
    </HeaderSection>
  );
}

export default Header;
