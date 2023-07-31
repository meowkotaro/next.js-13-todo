'use client'
import React , { FormEvent } from "react";
import { useRouter } from "next/navigation";
import supabase from "../../../utils/supabase-client";
import { useAppSelector, useAppDispatch } from "../../../redux/features/hooks";
import { closeModal } from "../../../redux/features/addTaskModalSlice";
import { reset,setTitle } from "@/redux/features/taskSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AddTaskModal() {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const userId = useAppSelector(state => state.loginUser.id)
    const { taskId, title } = useAppSelector(state => state.Task)

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault()
        
        if(taskId === "") {
            if(userId) {
                const { error } = await supabase
                .from('tasks')
                .insert([{title: title, user_id: userId}])
                .select()
                router.refresh()
                dispatch( reset() )
                dispatch( closeModal() )
                if(error){
                    alert(error.message)
                }
            }
        } else {
            const { error } = await supabase
            .from('tasks')
            .update({ title: title })
            .eq('id', taskId)
            router.refresh()
            dispatch( reset() )
            dispatch( closeModal() )
            if(error) {
                alert(error.message)
            }
        }
    }
    return (
        <div 
        title="タスク追加用のmodal"
        className="fixed top-0 left-0 w-full h-screen bg-gray-950 opacity-50">
            <section className="position-center rounded-lg w-64 bg-gray-800 border border-gray-500 text-gray-300">
                <header className=" p-2 w-full border-b flex justify-between items-center">
                    <h4>{taskId === "" ? 'タスクを追加': 'タイトルを変更'}</h4>
                    <button onClick={()=>{ 
                        dispatch(closeModal()) 
                        dispatch( reset() )}}>
                        <XMarkIcon className="w-6"/>
                    </button>
                </header>

                <form onSubmit={ handleSubmit }>
                    <div className="flex flex-col items-center py-4">
                        <textarea
                        placeholder="タスクのタイトルを入力"
                        cols={25} 
                        rows={2} 
                        value={title}
                        onChange={(e) => { dispatch(setTitle(e.target.value)) }}
                        className="rounded p-2 focus:outline-none text-gray-900"></textarea>
                        <div className="pt-3">
                            <button 
                            disabled={title === ''}
                            className="rounded border px-3 py-1 bg-red-900 text-gray-200 hover:bg-red-500 disabled:bg-gray-500"
                            type="submit">
                                {taskId === ''? '追加': '変更'}
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    )
}