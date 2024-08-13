import {BlogView} from "../components/BlogView.tsx";
import {useParams} from "react-router-dom";
import {UseBlog} from "../hooks";
import {AppBar} from "../components/Appbar.tsx";
import {BlogViewSkeleton} from "../components/Skeleton.tsx";

export const Blog = () => {
    const {id} = useParams();
    const {loading, blog} = UseBlog({
        id: String(id)
    });
    if (loading || !blog) {
        return (
            <div>
                <AppBar/>
                <BlogViewSkeleton/>
            </div>
        )
    }
    return (
        <div>
            <AppBar/>
            <BlogView blog={blog}/>
        </div>
    )
}