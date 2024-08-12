import {Link} from "react-router-dom";

interface BlogCardProps {
    id:string,
    title: string,
    content: string,
    authorName: string,
    publishedDate: string,
}

export const BlogCard = ({id,title, content, authorName, publishedDate}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className={"p-4 border-b-2 border-b-slate-100 "}>
                <div className={"flex items-center  gap-2  "}>
                    <div>
                        <Avatar authorName={authorName}/>
                    </div>

                    <div className={"text-gray-900"}>
                        {authorName}
                    </div>
                    <div>
                        <Circle/>
                    </div>
                    <div className={"opacity-60"}>
                        {publishedDate}
                    </div>
                </div>
                <div className={"mt-4 text-xl font-extrabold"}>{title}</div>
                <div className={"mt-2"}>{content.length > 40 ? content.slice(0, 150) + "..." : content}</div>
                <div className={"mt-2 opacity-60"}>{Math.floor(content.length / 100) + " min read"}</div>
            </div>
        </Link>
    )
}

function Circle() {
    return (
        <div className={"w-1 h-1 bg-slate-400 rounded-full"}></div>
    )
}

export function Avatar({authorName}: { authorName: string }) {
    const initials = authorName.split(" ");
    const initial = initials[0][0] + initials[1][0];
    return (
        <div
            className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{initial}</span>
        </div>
    )
}