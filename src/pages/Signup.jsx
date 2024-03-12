import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {UserAuth} from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const {user, signUp} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password, name)
            navigate('/')
        } catch (error) {
            console.log(error)
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
                        Sign up 
                    </h1>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                        <input  onChange={(e) => setName(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="name" placeholder='Name' />
                        <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder='Email' />
                        <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder='Password'/>
                        <button className="bg-red-600 py-3 mt-4 mb-4 rounded font-bold"> Sign up </button>
                        
                        <p className="py-2"> 
                            <span className="text-gray-600 pr-2">
                                Already subscribed to Netflix?
                            </span>
                            <Link to="/login">
                                Sign in
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

export default Signup