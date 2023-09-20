import { FormWrapper, Form, FormGroup, SubmitButton, RegisterText, FormTexts, LoginIcons } from "./sytles";
import User from "../../../assets/icons/User.svg";
import Lock from "../../../assets/icons/Lock.svg";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <FormWrapper>

            <FormTexts>
                <h1>Olá,</h1>
                <p>Para continuar navegando de forma segura, efetue o login.</p>
                <h2>Login</h2>
            </FormTexts>

            <Form>
                <FormGroup>
                    <input type="text" id="usuario" placeholder="Usuário" />
                    <LoginIcons className="icon" src={User} />
                </FormGroup>

                <FormGroup>
                    <input type="password" id="senha" placeholder="Senha" />
                    <LoginIcons className="icon" src={Lock} />
                </FormGroup>

                <SubmitButton type="submit">Entrar</SubmitButton>
            </Form>

            <RegisterText>Novo por aqui? <Link to="/register">Registre-se</Link></RegisterText>
        </FormWrapper>
    );
};

export default LoginForm