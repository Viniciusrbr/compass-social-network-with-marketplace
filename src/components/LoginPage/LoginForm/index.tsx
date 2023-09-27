import React, { useState, useEffect, FormEvent } from "react";
import { Container, Form, FormGroup, RegisterText, FormTexts, LoginIcons } from "./styles";
import User from "../../../assets/icons/User.svg";
import Lock from "../../../assets/icons/Lock.svg";
import { Link, useNavigate } from "react-router-dom";
import authServise from "../../../services/AuthService";
import { OrangeButton } from "../../../layout/OrangeButton";

const API_STATUS = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
};

const LoginForm = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        wrong: false,
        loading: false,
        apiStatus: API_STATUS.ACTIVE,
    });

    useEffect(() => {
        setFormState((prevState) => ({
            ...prevState,
            apiStatus: API_STATUS.ACTIVE,
        }));
        if (sessionStorage.getItem("user-token")) {
            navigate("/home");
        }
    }, [navigate]);

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormState((prevState) => ({
            ...prevState,
            loading: true,
        }));

        const formData = new FormData(event.currentTarget);

        const usuario = formData.get("usuario")!.toString();
        const password = formData.get("password")!.toString();
        const params = { usuario, password };

        try {
            const { status } = await authServise.login(params);

            if (status === 200) {
                alert("Você está logado");
                navigate("/home");
            } else {
                setFormState((prevState) => ({
                    ...prevState,
                    wrong: true,
                }));
            }
        } catch (error) {
            setFormState((prevState) => ({
                ...prevState,
                apiStatus: API_STATUS.INACTIVE,
            }));
        } finally {
            setFormState((prevState) => ({
                ...prevState,
                loading: false,
            }));
        }
    };

    return (
        <Container>
            <FormTexts>
                <h1>Olá,</h1>
                <p>Para continuar navegando de forma segura, efetue o login.</p>
                <h2>Login</h2>
            </FormTexts>

            <Form onSubmit={handleLogin}>
                <FormGroup wrong={formState.wrong}>
                    <input type="text" id="usuario" name="usuario" placeholder="Usuário" />
                    <LoginIcons src={User} />
                </FormGroup>

                <FormGroup wrong={formState.wrong}>
                    <input type="password" id="password" name="password" placeholder="Senha" />
                    <LoginIcons src={Lock} />
                </FormGroup>

                {formState.wrong && (
                    <p className="wrong-message">Usuário e/ou Senha inválidos. Por favor, tente novamente!</p>
                )}

                {formState.apiStatus === API_STATUS.INACTIVE && (
                    <p className="wrong-message">Servidor fora do ar. Por favor, tente novamente mais tarde!</p>
                )}

                <OrangeButton type="submit" disabled={formState.apiStatus === API_STATUS.INACTIVE}>
                    {formState.loading ? "Carregando..." : "Entrar"}
                </OrangeButton>
            </Form>

            <RegisterText>
                Novo por aqui? <Link to="/register">Registre-se</Link>
            </RegisterText>
        </Container>
    );
};

export default LoginForm;
