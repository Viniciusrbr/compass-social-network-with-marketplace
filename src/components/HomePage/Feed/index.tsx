
import UserPost from "../../UserPost"
import Friends from "./Friends"
import WhatsOnYourMind from "./WhatsOnYourMind"
import { Container } from "./styles"

function Feed() {
    
    return (
        <Container>

            <div className="mainFeed">
                <WhatsOnYourMind />
                <UserPost />

            </div>

            <Friends />

        </Container>
    )
}

export default Feed