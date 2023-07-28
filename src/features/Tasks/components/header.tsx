'use client'
import React, {useState} from "react";
import navigation,{ usePathname } from "next/navigation";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";

const TasksHeader: React.FC = () => {
    const pathname = usePathname()
    console.log(pathname)

    const headerText = pathname.split('/')[1].toString()

    return (
        <header className="flex justify-between items-center w-full h-12 pb-2 mx-auto">
            <h4 className="text-white font-bold text-2xl self-start">
                {headerText !== "" ? headerText : 'タスク一覧'}
            </h4>
            <div className="flex items-center gap-3 h-6 text-gray-400">
                <UserPlusIcon 
                className="h-6 cursor-pointer" 
                onClick={() => {}}/>
                <AdjustmentsHorizontalIcon 
                className="h-6 cursor-pointer"
                onClick={() => {}}/>
                <ChatBubbleLeftEllipsisIcon 
                className="h-6 cursor-pointer"
                onClick={() => {}}/>
                <Squares2X2Icon 
                className="h-6 cursor-pointer"
                onClick={() => {}}/>
            </div>
        </header>
    )
}

export default TasksHeader