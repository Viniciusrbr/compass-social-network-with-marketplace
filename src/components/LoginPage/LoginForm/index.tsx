import { FormWrapper, Form, FormGroup, RegisterText, FormTexts, LoginIcons } from "./sytles";
import User from "../../../assets/icons/User.svg";
import Lock from "../../../assets/icons/Lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import authServise from "../../../services/AuthService";
import { useEffect } from "react";
import { OrangeButton } from "../../../layout/OrangeButton";

const LoginForm = () => {
    const navigate = useNavigate();
    const [wrong, setWrong] = useState(false)
    const [loading, setLoading] = useState(false)
    const [apiStatus, setApiStatus] = useState('active');


    useEffect(() => {
        setApiStatus('active');
        if (sessionStorage.getItem("user-token")) {
            navigate("/home")
        }
    }, []);

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true)

        const formData = new FormData(event.currentTarget);

        const usuario = formData.get("usuario")!.toString();
        const password = formData.get("password")!.toString();
        const params = { usuario, password };

        try {
            const { status } = await authServise.login(params);

            if (status === 200) {
                alert("você está logado")
                navigate("/home")
            }
             else {
                setWrong(true)
            }
        } catch (error) {
            // A API falhou, definir apiStatus como "inactive"
            setApiStatus('inactive');
        } finally {
            setLoading(false);
        }

    }

    return (
        <FormWrapper>

            <FormTexts>
                <h1>Olá,</h1>
                <p>Para continuar navegando de forma segura, efetue o login.</p>
                <h2>Login</h2>
            </FormTexts>

            <Form onSubmit={handleLogin}>
                <FormGroup wrong={wrong}>
                    <input type="text" id="usuario" name="usuario" placeholder="Usuário" />
                    <LoginIcons src={User} />
                </FormGroup>

                <FormGroup wrong={wrong}>
                    <input type="password" id="password" name="password" placeholder="Senha" />
                    <LoginIcons src={Lock} />
                </FormGroup>

                {wrong && <p className="wrong-message">Usuário e/ou Senha inválidos. Por favor, tente novamente!</p>}

                {apiStatus === 'inactive' ? (
                    <>
                        <p className="wrong-message">Servidor fora do ar. Por favor, tente novamente mais tarde!</p>
                        <OrangeButton type="submit">Entrar</OrangeButton>
                    </>
                ) : (
                    <>
                        {wrong && <p className="wrong-message">Usuário e/ou Senha inválidos. Por favor, tente novamente!</p>}
                        <OrangeButton type="submit">{loading ? "Carregando..." : "Entrar"}</OrangeButton>
                    </>
                )}
            </Form>

            <RegisterText>Novo por aqui? <Link to="/register">Registre-se</Link></RegisterText>
        </FormWrapper>
    );
};

export default LoginForm