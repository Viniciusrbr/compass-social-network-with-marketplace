import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegisterForm from "./components/LoginPage/RegisterForm";
import LoginMainLayout from "./layout/LoginMainLayout";
import HomeMainLayout from "./layout/HomeMainLayout";



export function Router() {
    return (
        <Routes>
            <Route path="/" element={<LoginMainLayout />}>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<RegisterForm />} />
            </Route>

            <Route path="/home" element={<HomeMainLayout />}>
                
            </Route>

        </Routes>


    );
}