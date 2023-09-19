import { Link } from "react-router-dom"

function LoginForm() {
    return (
        <div>
            <h1>Olá,</h1>
            <p>Para continuar navegando de forma segura, efetue o login.</p>

            <h2>Login</h2>
            <p>Novo por aqui?<Link to="/register">Registre-se</Link></p>
        </div>
    )
}

export default LoginForm