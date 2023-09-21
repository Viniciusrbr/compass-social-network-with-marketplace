import { Link } from "react-router-dom"
import { FormWrapper, Form, FormGroup, SubmitButton, RegisterText, FormTexts, LoginIcons } from "../LoginForm/sytles";
import User from "../../../assets/icons/User.svg";
import Fingerprint from "../../../assets/icons/Fingerprint.svg";
import Calendar from "../../../assets/icons/Calendar.svg";
import At from "../../../assets/icons/At.svg";
import Lock from "../../../assets/icons/Lock.svg";
import ShieldCheck from "../../../assets/icons/ShieldCheck.svg";
import { FormEvent, useState } from "react";
import AuthService, { RegisterParams } from "../../../services/AuthService";


function RegisterForm() {
    const [wrong, setWrong] = useState(false)

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);

        const nome = formData.get('nome')!.toString()
        const usuario = formData.get('usuario')!.toString()

        const nascimentoInput = formData.get('data_nascimento')!.toString();
        const nascimentoParts = nascimentoInput.split('/');
        const data_nascimento = `${nascimentoParts[2]}-${nascimentoParts[1]}-${nascimentoParts[0]}`;

        const email = formData.get('email')!.toString()
        const password = formData.get('password')!.toString()
        const confirmar_senha = formData.get('confirmar_senha')!.toString()

        const params: RegisterParams = {
            nome,
            usuario,
            data_nascimento,
            email,
            password,
            confirmar_senha,
        }

        if (password !== confirmar_senha) {
            setWrong(true)
            alert('Senhas não conferem')
            return
        }

        const status = await AuthService.register(params)

        if (status === 200) {
            alert('Cadastro realizado com sucesso!')
        } else {
            alert('Erro ao realizar cadastro.')
        }

    }

    return (
        <FormWrapper>
            <FormTexts>
                <h1>Olá,</h1>
                <p>Por favor, registre-se para continuar.</p>
                <h2>Cadastro</h2>
            </FormTexts>

            <Form onSubmit={handleRegister}>
                <FormGroup>
                    <input type="text" id="nome" name="nome" placeholder="Nome" max={255} />
                    <LoginIcons className="icon" src={User} />
                </FormGroup>

                <FormGroup>
                    <input type="text" id="usuario" name="usuario" placeholder="Usuário" max={255} />
                    <LoginIcons className="icon" src={Fingerprint} />
                </FormGroup>

                <FormGroup>
                    <input type="text" id="data_nascimento" name="data_nascimento" placeholder="Nascimento" />
                    <LoginIcons className="icon" src={Calendar} />
                </FormGroup>

                <FormGroup>
                    <input type="email" id="email" name="email" placeholder="Email" />
                    <LoginIcons className="icon" src={At} />
                </FormGroup>

                <FormGroup wrong={wrong}>
                    <input type="password" id="password" name="password" placeholder="Senha" />
                    <LoginIcons className="icon" src={Lock} />
                </FormGroup>

                <FormGroup wrong={wrong}>
                    <input type="password" id="confirmar_senha" name="confirmar_senha" placeholder="Confirmar Senha" />
                    <LoginIcons className="icon" src={ShieldCheck} />
                </FormGroup>

                {wrong && <p className="wrong-message">As senhas não correspondem!</p>}

                <SubmitButton type="submit">Registrar-se</SubmitButton>
            </Form>

            <RegisterText>Já possui uma conta? <Link to="/">Faça Login</Link></RegisterText>
        </FormWrapper>
    )
}

export default RegisterForm