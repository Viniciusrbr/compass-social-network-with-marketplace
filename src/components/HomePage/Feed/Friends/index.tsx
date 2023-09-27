import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import ArrowTop from "../../../../assets/icons/ArrowTop.svg";
import UserService, { UsuarioType } from "../../../../services/UserService";

function Friends() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.GetAllUsers().then((response) => {
            setUsers(response.data);
        });
    }, []);

    return (
        <Container>
            <div>
                <p>Meus Amigos</p>
                <img src={ArrowTop} alt="" />
            </div>

            <ul>
                {users.map((user: UsuarioType) => (
                    <Link key={user.id} to={`/home/profile/${user.id}`}>
                        <li>
                            <img
                                src="https://avatars.githubusercontent.com/u/59899998?v=4"
                                alt={user.nome}
                            />
                            {user.nome}
                        </li>
                    </Link>
                ))}
            </ul>
        </Container>
    );
}

export default Friends;
