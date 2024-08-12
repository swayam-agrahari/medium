import {BlogCard} from "../components/BlogCard.tsx";
import {AppBar} from "../components/Appbar.tsx";
import {UseBlogs} from "../hooks";

export const Blogs = () => {
    const {loading, blogs} = UseBlogs()
    if (loading) {
        return (<div>loading...</div>)
    }
    return (
        <>
            <div className={""}>
                <AppBar/>
                <div className={"border-b border-b-slate-200 "}></div>
            </div>
            <div className={"flex flex-col gap-8 py-8 px-56"}>

                {blogs.map((blog) => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous User"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"Dec 3, 2023"}/>)}
            </div>
        </>
    )
}