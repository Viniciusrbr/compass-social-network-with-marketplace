import Friends from "./Friends"
import WhatsOnYourMind from "./WhatsOnYourMind"
import { Container } from "./styles"

function Feed() {
    return (
        <Container>
            <div>
                <WhatsOnYourMind />
            </div>

            <div>
                <Friends />
            </div>



        </Container>
    )
}

export default Feed