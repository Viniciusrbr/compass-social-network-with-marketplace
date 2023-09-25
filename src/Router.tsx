import { Routes, Route } from "react-router-dom";
import RegisterForm from "./components/LoginPage/RegisterForm";
import LoginMainLayout from "./pages/LoginMainLayout";
import HomeMainLayout from "./pages/HomeMainLayout";
import Profile from "./components/Profile";
import Feed from "./components/HomePage/Feed";
import LoginForm from "./components/LoginPage/LoginForm";
import Marketplace from "./components/Marketplace";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<LoginMainLayout />}>
                <Route path="/" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Route>

            <Route path="/home" element={<HomeMainLayout />}>
                <Route path="/home" element={<Feed />} />
                <Route path="profile" element={<Profile />} />
                <Route path="marketplace" element={<Marketplace />} />
            </Route>

        </Routes>


    );
}