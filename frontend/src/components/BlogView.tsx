import {Avatar} from "./BlogCard.tsx";
import {Blog} from "../hooks";


export const BlogView = ({blog}: { blog:Blog }) => {

    return (
        <div className={" p-16  w-screen h-screen flex  justify-between gap-4 "}>
            <div className={"w-2/3 flex flex-col   "}>
                <div className={"text-3xl font-bold"}>
                    {blog.title}
                </div>
                <div className={"my-2 text-gray-500"}>Posted on 22 Dec, 2023</div>
                <div className={"mt-2 text-gray-800"}>
                    {blog.content}
                </div>

            </div>
            <div className={"w-1/3"}>
                <div className={"text-xl"}>Author</div>
                <div className={"mt-4 flex items-start "}>
                    <div className={"mr-4"}>
                        <Avatar authorName={blog.author.name || "Anonymous Author"}/>
                    </div>
                    <div className={""}>
                        <div className={"text-xl font-bold  "}>{blog.author.name || "Anonymous Author"}</div>
                        <div className={"text-gray-800 mt-2 opacity-80 "}>Master of earth, purge all the commands and funniest
                            person in the kingdom
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}