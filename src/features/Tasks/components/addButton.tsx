'use client'
import React from "react";
import AddTaskModal from "./addTaskModal";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useAppDispatch,useAppSelector } from "../../../redux/features/hooks";
import { openModal } from "../../../redux/features/addTaskModalSlice";

export default function AddButton () {
    const isLogin = useAppSelector(state => state.addTaskModal.isOpen)
    const dispatch = useAppDispatch()
    return(
        <>
            <button className="mt-2 flex items-center gap-2 group" onClick={()=>{ dispatch( openModal() ) }}>
                <div className="h-5 w-5 rounded-full text-red-500 group-hover:text-white group-hover:bg-red-500">
                    <PlusIcon className="w-5"/>
                </div>
                <p className="text-base font-medium text-gray-400 group-hover:text-red-400">タスクを追加</p>
            </button>
            {isLogin ? 
            <AddTaskModal/>
            :
            <></>
            }
        </>
    )
}