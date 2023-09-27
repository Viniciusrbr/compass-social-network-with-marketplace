import { Container } from './styles'
import UserProfile from '../../../assets/userInfo-icons/UserProfile.svg'
import Cake from '../../../assets/userInfo-icons/Cake.svg'
import MapPin from '../../../assets/userInfo-icons/MapPin.svg'
import Message from '../../../assets/userInfo-icons/Message.svg'
import Phone from '../../../assets/userInfo-icons/Phone.svg'

import { UsuarioType } from '../../../services/UserService'

interface UserInfoProps {
    userData: UsuarioType | null; // Define the prop type
}


function UserInfo({ userData }: UserInfoProps) {
    
    

    return (
        <Container>
            <ul>
                <h2>Sobre</h2>
                <li><img src={UserProfile} />{userData?.sexo || 'Não informado'}</li>
                <li><img src={Cake} />{userData?.data_nascimento || 'Não informado'}</li>
                <li><img src={MapPin} />{userData?.endereco || 'Não informado'}</li>
                <li><img src={Message} />{userData?.email || 'Não informado'}</li>
                <li><img src={Phone} />{userData?.telefone || 'Não informado'}</li>
            </ul>
        </Container>
    )
}

export default UserInfo