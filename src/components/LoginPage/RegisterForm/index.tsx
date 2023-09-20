import { Link } from "react-router-dom"
import { FormWrapper, Form, FormGroup, SubmitButton, RegisterText, FormTexts, LoginIcons } from "../LoginForm/sytles";
import User from "../../../assets/icons/User.svg";
import Fingerprint from "../../../assets/icons/Fingerprint.svg";
import Calendar from "../../../assets/icons/Calendar.svg";
import At from "../../../assets/icons/At.svg";
import Lock from "../../../assets/icons/Lock.svg";
import ShieldCheck from "../../../assets/icons/ShieldCheck.svg";
import { FormEvent } from "react";
import AuthService, { RegisterParams } from "../../../services/AuthService";


function RegisterForm() {

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);

        const nome = formData.get('nome')!.toString()
        const usuario = formData.get('usuario')!.toString()


        const nascimentoInput = formData.get('nascimento')!.toString();
        const nascimentoParts = nascimentoInput.split('/');
        const nascimento = `${nascimentoParts[2]}-${nascimentoParts[1]}-${nascimentoParts[0]}`;


        const email = formData.get('email')!.toString()
        const senha = formData.get('senha')!.toString()
        const confirmarSenha = formData.get('confirmarSenha')!.toString()

        const params: RegisterParams = {
            nome,
            usuario,
            nascimento,
            email,
            senha,
        }

        if (senha !== confirmarSenha) {
            alert('Senhas não conferem')
            return
        }

        const status = await AuthService.register(params)

        if (status === 200) {
            alert('Cadastro realizado com sucesso!')
            window.location.href = '/'
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
                    <input type="text" id="nome" name="nome" placeholder="Nome" />
                    <LoginIcons className="icon" src={User} />
                </FormGroup>

                <FormGroup>
                    <input type="text" id="usuario" name="usuario" placeholder="Usuário" />
                    <LoginIcons className="icon" src={Fingerprint} />
                </FormGroup>

                <FormGroup>
                    <input type="text" id="nascimento" name="nascimento" placeholder="Nascimento" />
                    <LoginIcons className="icon" src={Calendar} />
                </FormGroup>

                <FormGroup>
                    <input type="email" id="email" name="email" placeholder="Email" />
                    <LoginIcons className="icon" src={At} />
                </FormGroup>

                <FormGroup>
                    <input type="password" id="senha" name="senha" placeholder="Senha" />
                    <LoginIcons className="icon" src={Lock} />
                </FormGroup>

                <FormGroup>
                    <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirmar Senha" />
                    <LoginIcons className="icon" src={ShieldCheck} />
                </FormGroup>

                <SubmitButton type="submit">Registrar-se</SubmitButton>
            </Form>

            <RegisterText>Já possui uma conta? <Link to="/">Faça Login</Link></RegisterText>
        </FormWrapper>
    )
}

export default RegisterForm