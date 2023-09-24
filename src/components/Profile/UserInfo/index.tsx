import { Container } from './styles'
import UserProfile from '../../../assets/userInfo-icons/UserProfile.svg'
import Cake from '../../../assets/userInfo-icons/Cake.svg'
import MapPin from '../../../assets/userInfo-icons/MapPin.svg'
import Message from '../../../assets/userInfo-icons/Message.svg'
import Phone from '../../../assets/userInfo-icons/Phone.svg'

function UserInfo() {
    return (
        <Container>
            <ul>
                <h2>Sobre</h2>
                <li><img src={UserProfile} />Masculino</li>
                <li><img src={Cake} />Nascido em 26 de Junho, 1980</li>
                <li><img src={MapPin} />2239  Hog Camp Road Schaumburg</li>
                <li><img src={Message} />charles5182@ummoh.com</li>
                <li><img src={Phone} />(33) 75700-5467</li>
            </ul>
        </Container>
    )
}

export default UserInfo