import {useEffect, useState} from "react";
import axios from "axios";
import {BACKEND_URL} from "../config.ts";

interface Blog {
    "title": string;
    "id":string;
    "content": string;
    "author":{
        "name": string;
    }
}

export const UseBlog = ({id}:{id:string})=>{
    const [loading, setLoading] = useState(true);
    const [blog,setBlog] = useState<Blog>();
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then((res)=>{
                setBlog(res.data.blogs)
                setLoading(false);
            })
    },[id])
    return{

        loading,
        blog
    }

}

export const UseBlogs = ()=>{
    const [loading, setLoading] = useState(true);
    const [blogs,setBlogs] = useState<Blog[]>([]);
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        })
            .then((res)=>{
                setBlogs(res.data.blogs)
                setLoading(false);
            })
    },[])
    return{

        loading,
        blogs
    }

}