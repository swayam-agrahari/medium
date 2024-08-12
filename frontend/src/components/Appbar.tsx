import {Avatar} from "./BlogCard.tsx";
import {SearchIcon} from "lucide-react";

export const AppBar = ()=>{
    return(
        <div className={"flex items-center  justify-between p-8 "}>
            <div className={"text-4xl font-semibold"}>Medium</div>
            <div className="pt-2 relative mx-auto text-gray-600 flex items-center justify-center">
                <button type="submit" className={"absolute left-0 p-2"}  >
                    <SearchIcon color={"#BDBDBD"} />
                </button>
                <input
                    className={"border-2 border-gray-300 bg-white h-10 px-10 pr-16 rounded-lg text-md  focus:outline-none"}
                    type="text" name="search" placeholder="Search"/>
            </div>
            <div>
                <Avatar authorName={"Swayam Agrahari"}/>
            </div>
        </div>
    )
}