import {Link, useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import {SignupInput} from "@swayam1/medium-commons";
import axios from "axios";
import {BACKEND_URL} from "../config";

export const Auth = ({type}:{type:"signup" | "signin"}) => {
    const navigate = useNavigate();
    const [signInFields, setSignInFields] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    });

    async function handleSubmit() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, signInFields);
            const token = response.data.token;
            if (!token){
                throw new Error()
            }
            localStorage.setItem("token", token);
            navigate("/blogs")
        }
        catch (e){
            //handle errors
            console.log("Error creating token",e);
            alert("Error creating token")

        }
    }

    return (
        <div className={"h-screen flex flex-col justify-center text-center  w-full  "}>
            <div>
                <div className={"text-4xl font-bold"}>
                    {type === "signup" ? "Create your account" : "Welcome Back"}
                </div>
                <div className={"text-xl mt-4  opacity-60"}>
                    {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                    <Link to={type ==="signup" ? "/signin" : "/"} className={" ml-2 underline"}>
                        {type === "signup" ? "Login" : "Sign Up"}
                    </Link>
                </div>
            </div>
            <div className={"flex flex-col justify-center items-center mt-8 gap-5"}>
                {type==="signup" ? <InputBox label={"Username"} placeholder={"Enter your username"} onChange={(e) => {
                    setSignInFields(c => ({
                        ...c, name: e.target.value,
                    }))
                }}/> : ""}
                <InputBox label={"Email"} placeholder={"m@example.com"} onChange={(e) =>{
                    setSignInFields(c =>({
                        ...c, email:e.target.value,
                    }))
                }} />
                <InputBox label={"Password"} type={"password"}  onChange={(e) =>{
                    setSignInFields(c =>({
                        ...c, password:e.target.value,
                    }))
                }} />
            </div>
            <div className={"mt-6"}>
                <button className="text-xl bg-black text-white font-semibold py-2 px-4 w-1/2 h-14 rounded-lg" onClick={handleSubmit}>
                    {type === "signup" ? "Sign Up" : "Login"}
                </button>

            </div>
        </div>


    )
}

interface InputBoxType {
    label: string,
    placeholder?: string,
    type?:string,
    onChange: (e:ChangeEvent<HTMLInputElement> )=>void
}

function  InputBox({label, placeholder,type,onChange}:InputBoxType) {
    return (
        <div className={"w-1/2 "}>
            <label  className="block mb-2 text-xl font-medium text-gray-900 text-left">{label}</label>
            <input type={type || "text"} id="first_name"
                   className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-12 p-2.5     "
                   placeholder={placeholder} required onChange={onChange}/>
        </div>

    )
}