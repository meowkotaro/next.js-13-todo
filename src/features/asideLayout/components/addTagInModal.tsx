'use client'
import React, { useState, FormEvent , MouseEvent} from "react"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "../../../redux/features/hooks"
import { closeModal } from "../../../redux/features/modalSlice"
import supabase from "../../../utils/supabase-client"

const AddTagInModal : React.FC = () => {
    const [ inputText, setInputText ] = useState<string>('')
    const router = useRouter()

    const dispatch = useAppDispatch()

    const submitHandler = async (e: FormEvent<HTMLElement> | MouseEvent<HTMLButtonElement>) => {
        if (e.target) {
            e.preventDefault()
        }
        const { error } = await supabase
        .from('tags')
        .insert({name: inputText})
        setInputText('')
        dispatch(closeModal())
        router.refresh()
    }

    return(
        <section 
        className="fixed top-0 left-0 w-full h-screen bg-gray-950 bg-opacity-50">
            <div className="position-center rounded-lg w-64 h-48 bg-gray-800 border border-gray-500 text-gray-300">
                <form className="w-3/4 mx-auto mt-4" onSubmit={submitHandler}>
                    <label>タグ名</label>
                    <div className="w-full">
                        <input
                        type="text"
                        placeholder="入力欄"
                        value={inputText}
                        onChange={(e) => {setInputText(e.target.value)}}
                        className="w-full rounded px-2 py-1 bg-gray-700 focus:outline-none"/>
                    </div>
                    <button type="submit"></button>
                </form>
                <div className="mx-auto w-4/5 flex justify-center items-center gap-3 ">
                    <button
                    onClick={() => { dispatch(closeModal()) }}
                    className="rounded py-1.5 px-3 bg-gray-700 hover:bg-gray-600"
                    >
                        キャンセル
                    </button>
                    <button
                    disabled={inputText === ''}
                    className="rounded py-1.5 px-3 bg-red-600 disabled:bg-opacity-70 disabled:text-opacity-70 hover:enabled:bg-red-800"
                    onClick={submitHandler}
                    >
                        タグを追加
                    </button>
                </div>
            </div>

        </section>
    )
}

export default AddTagInModal