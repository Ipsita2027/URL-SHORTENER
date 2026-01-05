import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

function AuthPage() {

    const [login,setLogin]=useState(true);
    const [state,setState]=useState(true);

    return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
          {login?<LoginForm state={setLogin}/>
                :<RegisterForm state={setLogin}/>}
    </div>
    );
}

export default AuthPage;