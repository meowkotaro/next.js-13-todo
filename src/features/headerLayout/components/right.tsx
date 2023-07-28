import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { BellIcon } from '@heroicons/react/24/outline'



const HeaderRight: React.FC = () => {
    return (
        <div className="pr-4 flex gap-4">
            <button className="px-2 h-7 rounded flex items-center justify-center gap-1 bg-gray-400">
                <div className="flex items-center">
                    <StarIcon className="h-6 w-6 text-yellow-500"/>
                </div>
                <span className="text-sm font-bold tracking-tighter font-sans">プロにアップグレード</span>
            </button>
            <PlusIcon className="h-6 w-6 cursor-pointer text-blue-500"/>
            <QuestionMarkCircleIcon className="h-6 w-6 cursor-pointer text-blue-500"/>
            <BellIcon className="h-6 w-6 cursor-pointer text-blue-500"/>
            <button className="rounded-full w-7 h-7 bg-gray-400">
                <img src="/next.svg" alt="" className="object-cover"/>
            </button>
        </div>

    )
}

export default HeaderRight