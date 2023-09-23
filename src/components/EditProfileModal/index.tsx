import { Backdrop, CancelButton, Container, Form, FormGroup } from "./styles";
import User from "../../assets/icons/User.svg";
import Identification from "../../assets/icons/IdentificationCard.svg";
import DNA from "../../assets/icons/Dna.svg";
import Calendar from "../../assets/icons/Calendar.svg";
import MapPin from "../../assets/icons/MapPin.svg";
import Phone from "../../assets/icons/Phone.svg";

const EditProfileModal = ({ modalOpen }: any) => {

    return (
        <Backdrop>
            <Container>
                <h1>Editar Perfil</h1>

                <Form action="">

                    <FormGroup>
                        <input type="text" id="nome" name="nome" placeholder="Nome" max={255} />
                        <img src={User} />
                    </FormGroup>

                    <FormGroup>
                        <input type="text" id="nome" name="nome" placeholder="Cargo/Profissão" />
                        <img src={Identification} />
                    </FormGroup>

                    <FormGroup>
                        <input type="text" id="nome" name="nome" placeholder="Data de Nascimento" />
                        <img src={DNA} />
                    </FormGroup>

                    <FormGroup>
                        <input type="text" id="nome" name="nome" placeholder="Endereço" />
                        <img src={Calendar} />
                    </FormGroup>

                    <FormGroup>
                        <input type="text" id="nome" name="nome" placeholder="Telefone" />
                        <img src={MapPin} />
                    </FormGroup>

                    <FormGroup>
                        <input type="text" id="nome" name="nome" placeholder="Nome" />
                        <img src={Phone} />
                    </FormGroup>

                    <CancelButton onClick={modalOpen}>Cancelar</CancelButton>
                    <button>Salvar</button>
                </Form>

            </Container>

        </Backdrop>
    );
};

export default EditProfileModal;