import { Container } from "./styles"
import ArrowTop from "../../../../assets/icons/ArrowTop.svg"

function Friends() {
    return (
        <Container>

            <div>
                <p>Meus Amigos</p>
                <img src={ArrowTop} alt="" />
            </div>

            <ul>
                <li><img src="https://avatars.githubusercontent.com/u/59899998?v=4" />Matheus Gonzales</li>
                <li><img src="https://avatars.githubusercontent.com/u/59899998?v=4" />Raphael Ferreira</li>
                <li><img src="https://avatars.githubusercontent.com/u/59899998?v=4" />Eduardo Benvenuti</li>
                <li><img src="https://avatars.githubusercontent.com/u/59899998?v=4" />Lara Priscila</li>
            </ul>

        </Container>
    )
}

export default Friends