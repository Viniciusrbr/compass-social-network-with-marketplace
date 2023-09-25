import { OrangeButton } from "../../../layout/OrangeButton"
import { Container } from "./styles"

function HeaderMarket() {
    return (
        <Container>
            <p>TODOS ITENS</p>

            <div>
                <h1>Marketplace</h1>
                <OrangeButton>Adicionar Item</OrangeButton>
            </div>

        </Container>
    )
}

export default HeaderMarket