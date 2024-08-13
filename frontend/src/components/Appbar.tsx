import {Avatar} from "./BlogCard.tsx";
import {SearchIcon} from "lucide-react";
import {Link} from "react-router-dom";

export const AppBar = () => {
    return (
        <div className={"flex items-center justify-between  p-8 "}>
            <Link to={"/blogs"}>
                <div className={"text-4xl font-semibold"}>Medium</div>
            </Link>
            <div className="pt-2 relative  text-gray-600 flex items-center justify-center">
                <div className={"absolute left-0 p-2"}>
                    <SearchIcon color={"#BDBDBD"}/>
                </div>
                <input
                    className={"border-2 border-gray-300 bg-white h-10 px-10 pr-16 rounded-lg text-md  focus:outline-none"}
                    type="text" name="search" placeholder="Search"/>
            </div>
            <div className={"flex  items-center justify-center gap-8 "}>
                <div>
                    <Link to={"/publish"}>
                        <button className="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600">
                            New
                        </button>
                    </Link>
                </div>
                <Avatar authorName={"Swayam Agrahari"}/>
            </div>

        </div>
    )
}