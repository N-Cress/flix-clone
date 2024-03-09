import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {UserAuth} from '../context/AuthContext';

const Login = () => {
    const {user, signIn} = UserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signIn(email, password)
            navigate('/')
        } catch (error) {
            if (error.message === "Firebase: Error (auth/invalid-login-credentials).") {
                setError("Invalid Email or Password")
            } else  {
                setError("Unknown Error: Please try later")
            }
         
        }
    }

  return (
    <>
    <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/fa6f97d9-245e-43d7-bb56-af27cbf6d656/US-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen">

        </div>
        <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                <div className="max-w-[320px] mx-auto py-16">
                    <h1 className="text-3xl font-bold ">
                        Log in
                    </h1>
                    {error ? <p className="p-3 bg-red-400 mt-2"> {error} </p> 
                    :
                    null
                    }
                    <form className="w-full flex flex-col py-4">
                    
                        <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder='Email' />
                        <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder='Password'/>
                        <button onClick={handleLogin} className="bg-red-600 py-3 my-6 rounded font-bold"> Log in </button>
                        <div className="flex justify-between items-center">
                            <p> <input className="mr-2" type="checkbox" /> Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className="py-8"> 
                            <span className="text-gray-600 pr-2">
                                New to Netflix?
                            </span>
                            <Link to="/signup">
                                Sign up now. 
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
   </> 
  )
}

export default Login