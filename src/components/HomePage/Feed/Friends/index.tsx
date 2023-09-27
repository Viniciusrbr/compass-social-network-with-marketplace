import { Container } from "./styles"
import ArrowTop from "../../../../assets/icons/ArrowTop.svg"
import { useEffect, useState } from "react"
import UserService from "../../../../services/UserService"

function Friends() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        UserService.GetAllUsers().then((response) => {
            const userNames = response.data.map((user: { nome: any }) => user.nome);
            setUsers(userNames);
        })

    }, [])

    // Pegar os 4 primeiros nomes da lista
    const firstFourUsersNames = users.slice(0, 4);

    return (
        <Container>

            <div>
                <p>Meus Amigos</p>
                <img src={ArrowTop} alt="" />
            </div>

            <ul>
                {firstFourUsersNames.map((userName, index) => (
                    <li key={index}>
                        <img src="https://avatars.githubusercontent.com/u/59899998?v=4" />
                        {userName}
                    </li>
                ))}
            </ul>

        </Container>
    )
}

export default Friends