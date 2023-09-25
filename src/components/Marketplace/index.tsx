import HeaderMarket from "./HeaderMarket"
import MarketItem from "./MarketItem"
import { Container,ProductContainer } from "./styles"

function Marketplace() {
    return (
        <Container>
            <HeaderMarket />

            <ProductContainer>
                <MarketItem />
                <MarketItem />
                <MarketItem />
                <MarketItem />
                <MarketItem />
                <MarketItem />
                <MarketItem />
                <MarketItem />
            </ProductContainer>


        </Container>
    )
}

export default Marketplace