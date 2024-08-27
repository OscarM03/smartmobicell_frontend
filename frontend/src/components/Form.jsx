import { useState } from "react";
import api from "../api";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(""); // Only used for registration
    const [confirmPassword, setConfirmPassword] = useState(""); // Only used for registration
    const [error, setError] = useState(""); // State for error handling
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const name = method === "login" ? "Login" : "Register";
    const alternateAction = method === "login" ? "/register" : "/login";

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if passwords match (only for registration)
        if (method === "register" && password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }
    
        try {
            const data = { username, password };
            if (method === "register") {
                data.email = email;
                data.confirm_password = confirmPassword;
            }
    
            const res = await api.post(route, data);
            
            if (method === "login") {
                console.log('Login Response:', res.data);
                Cookies.set(ACCESS_TOKEN, res.data.access, { path: '/', expires: 7 });
                Cookies.set(REFRESH_TOKEN, res.data.refresh, { path: '/', expires: 7 });
                    navigate(from);
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error('Login Error:', error);
            setError(`An error occurred: ${error.response?.data?.detail || error.message}`);
        }
    };
    

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-display-bg px-16 py-8 rounded-lg shadow-lg mt-10">
                <h1 className="text-2xl font-bold mb-6 text-center text-thick-orange">{name}</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                
                {method === "login" && (
                    <>
                        <div className="mb-4">
                            <input
                                className="w-full px-4 py-3 border border-thick-orange rounded-lg"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full px-4 py-3 border border-thick-orange rounded-lg"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>
                    </>
                )}

                {method === "register" && (
                    <>
                        <div className="mb-4">
                            <input
                                className="w-full px-4 py-3 border border-thick-orange rounded-lg"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                className="w-full px-4 py-3 border border-thick-orange rounded-lg"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                className="w-full px-4 py-3 border border-thick-orange rounded-lg"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                className="w-full px-4 py-3 border border-thick-orange rounded-lg"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                                required
                            />
                        </div>
                    </>
                )}

                <button
                    className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg
                    focus:outline-none"
                    type="submit"
                >
                    {name}
                </button>

                {method === "register" && (
                    <div>
                        <p className="mt-4 text-center">
                            Already have an account? <a href={alternateAction} className="text-blue-500 hover:underline">Login</a>
                        </p>
                    </div>
                )}

                {method === "login" && (
                    <div>
                        <p className="mt-4 text-center">
                            Don't have an account? <a href={alternateAction} className="text-blue-500 hover:underline">Register</a>
                        </p>
                        <p className="mt-4 text-center">
                            <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Form;
