'use client'
import React from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import supabase from "../../../utils/supabase-client";
import type { Database } from "../../../../database.types";
import { CheckIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "../../../redux/features/hooks";
import { openModal } from "../../../redux/features/addTaskModalSlice";
import { setTask } from "../../../redux/features/taskSlice";

type Todo = Database['public']['Tables']['tasks']['Row']

type Color = {
    color : string,
}

type Props = Todo & Color


const TaskItem: React.FC<Props> = ({color, id, created_at, title, completed}) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const isopen = useAppSelector(state => state.addTaskModal.isOpen)
    const date = format( new Date(created_at), 'yyyy-MM-dd HH:mm:ss' )
    const completeBtn = async () => {
        await supabase
        .from('tasks')
        .update({ completed: !completed })
        .eq('id', id)
        router.refresh()
    }

    const removeTask = async (id: string) => {
        await supabase
        .from('tasks')
        .delete()
        .eq('id', id)

        router.refresh()
    }

    const updateTask = () => {
        dispatch( openModal() )
        dispatch( setTask({ taskId: id, title: title? title : "" }) )
    }



    return (
        <li className="border-b-2 border-gray-500 text-white flex gap-2 items-start w-full mt-2">
            <button className="flex-shrink-0"
            onClick={completeBtn}>
                <div className={`border-2 rounded-full w-5 h-5 border-blue-400 overflow-hidden`}>
                    {completed ?
                    <CheckIcon className={`text-blue-600 bg bg-blue-300`}/>
                    :
                    <></>
                    }
                </div>
            </button>
            <div className="flex-col items-start gap-2 flex-grow cursor-pointer last:pb-1 ">
                <p className="text-sm font-medium break-words">
                {title}
                </p>
                <p className="text-xs text-gray-300">{date}</p>
            </div>
            <div className="flex gap-2 w-12">
                <button className="w-5 text-blue-300" onClick={updateTask}>
                    <PencilSquareIcon/>
                </button>
                <button className="w-5 text-red-300" onClick={() => { removeTask(id) }}>
                    <TrashIcon/>
                </button>
            </div>
        </li>
    )
}

export default TaskItem