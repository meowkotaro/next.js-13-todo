import React from "react";
import TaskItem from "./taskItem";
import { PlusIcon } from "@heroicons/react/24/solid";

const TaskList:React.FC = () => {
    return (
    <>
        <ul>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
            <TaskItem/>
        </ul>
        <button className="mt-2 flex items-center gap-2 group">
            <div className="h-5 w-5 rounded-full text-red-500 group-hover:text-white group-hover:bg-red-500">
                <PlusIcon className="w-5"/>
            </div>
            <p className="text-base font-medium text-gray-400 group-hover:text-red-400">タスクを追加</p>
        </button>
    </>


    )
}

export default TaskList