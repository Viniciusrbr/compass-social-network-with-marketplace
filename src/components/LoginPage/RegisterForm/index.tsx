import { Link } from "react-router-dom"

function RegisterForm() {
    return (
        <div>
            <h1>Olá,</h1>
            <p>Por favor, registre-se para continuar.</p>

            <h2>Cadastro</h2>
            <p>Já possui uma conta?<Link to="/">Faça Login </Link></p>
        </div>
    )
}

export default RegisterForm