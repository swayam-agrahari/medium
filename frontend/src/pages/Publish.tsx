import {AppBar} from "../components/Appbar.tsx";
import axios from "axios";
import {BACKEND_URL} from "../config.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Publish = () => {
    async function  handleSubmit(){
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title,
            content
        },{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        navigate(`/blog/${response.data.id}`)

    }

    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <AppBar/>
            </div>
            <div className={"flex  justify-center w-full p-8 "}>
                <div className={" max-w-screen-lg w-full"}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input onChange={(e)=>{
                            setTitle(e.target.value)
                        }} type="email" name="floating_email" id="floating_email"
                               className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_email"
                               className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                    </div>
                    <div>
                        <textarea  rows={4}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                                  placeholder="Tell us you story..." onChange={(e)=>{
                                      setContent(e.target.value)
                        }}></textarea>
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600 mt-5">Publish
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}