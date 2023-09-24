import { Container } from "./styles"
import Camera from "../../../../assets/comment-icons/photo.svg"
import Image from "../../../../assets/comment-icons/image.svg"
import Clipper from "../../../../assets/comment-icons/clipper.svg"
import Location from "../../../../assets/comment-icons/location.svg"
import Emoji from "../../../../assets/comment-icons/emojis.svg"
import { OrangeButton } from "../../../../layout/OrangeButton"

function WhatsOnYourMind() {
    return (
        <Container>

            <div className="input-area">
                <img src="https://avatars.githubusercontent.com/u/59899998?v=4" />
                <input placeholder="No que você está pensando? " />
            </div>

            <div className="IconsSection">

                <div>
                    <img src={Camera} />
                    <img src={Image} />
                    <img src={Clipper} />
                    <img src={Location} />
                    <img src={Emoji} />
                </div>

                <OrangeButton>Postar</OrangeButton>
            </div>

        </Container>
    )
}

export default WhatsOnYourMind