export const Skeleton=()=>{
    return (
        <div className="p-4 border-b-2 border-b-slate-100 animate-pulse">
            <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
                <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
            </div>
            <div className="mt-4 h-6 bg-gray-200 rounded"></div>
            <div className="mt-2 h-4 bg-gray-200 rounded"></div>
            <div className="mt-2 h-4 w-16 bg-gray-200 rounded"></div>
        </div>
    )
}

export const BlogViewSkeleton = () => {
    return (
        <div className="p-16 w-screen h-screen flex justify-between gap-4 animate-pulse">
            <div className="w-2/3 flex flex-col">
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="my-2 h-4 w-24 bg-gray-200 rounded"></div>
                <div className="mt-2 h-6 bg-gray-200 rounded"></div>
            </div>
            <div className="w-1/3">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="mt-4 flex items-start">
                    <div className="mr-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    </div>
                    <div>
                        <div className="h-6 w-32 bg-gray-200 rounded"></div>
                        <div className="h-4 w-48 bg-gray-200 mt-2 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};