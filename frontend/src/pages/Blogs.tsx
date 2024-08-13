import {BlogCard} from "../components/BlogCard.tsx";
import {AppBar} from "../components/Appbar.tsx";
import {UseBlogs} from "../hooks";
import {Skeleton} from "../components/Skeleton.tsx";

export const Blogs = () => {
    const {loading, blogs} = UseBlogs()
    if (loading) {
        return (
            <div>
                <div>
                    <AppBar/>
                </div>
                <div className={"flex  justify-center w-full"}>
                    <div className={"flex flex-col  max-w-screen-2xl w-full"}>
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                        <Skeleton/>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className={""}>
                <AppBar/>
                <div className={"border-b border-b-slate-200 "}></div>
            </div>
            <div className={"flex  justify-center w-full"}>
                <div className={"flex flex-col  max-w-screen-2xl w-full"}>

                    {blogs.map((blog) => <BlogCard
                        id={blog.id}
                        authorName={blog.author.name || "Anonymous User"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"Dec 3, 2023"}/>)}
                </div>
            </div>
        </>
    )
}