import { Container } from './styles'
import UserProfile from '../../../assets/userInfo-icons/UserProfile.svg'
import Cake from '../../../assets/userInfo-icons/Cake.svg'
import MapPin from '../../../assets/userInfo-icons/MapPin.svg'
import Message from '../../../assets/userInfo-icons/Message.svg'
import Phone from '../../../assets/userInfo-icons/Phone.svg'
import { useEffect, useState } from 'react'
import UserService from '../../../services/UserService'
import { UsuarioType } from '../../../services/UserService'

function UserInfo() {
    const [userData, setUserData] = useState<UsuarioType>();


    useEffect(() => {
        UserService.LoggedUser().then((response) => {
            if (response && response.data && response.data.nome) {
                console.log(response.data);
                setUserData(response.data);
            }
        });
    }, []);

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