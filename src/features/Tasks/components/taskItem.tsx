'use client'
import React from "react";
import { useRouter } from "next/navigation";
import supabase from "../../../utils/supabase-client";
import type { Database } from "../../../../database.types";

type Todo = Database['public']['Tables']['tasks']['Row']

type Props = {
    color? : string
}

const TaskItem: React.FC<Props> = ({color = 'border-gray-400'}) => {
    // const router = useRouter()




    return (
        <li className="border-b-2 border-gray-500 text-white flex gap-2 items-start w-full mt-2">
            <button className="flex-shrink-0"
            onClick={() => {}}>
                <div className={`border-2 rounded-full w-5 h-5 ${color}`} ></div>
            </button>
            <div className="flex-col items-start gap-2 w-11/12 cursor-pointer last:pb-1 ">
                <p className="text-sm break-words">
                サンプルテキストのタスクです。文字制限は無しで文字はラップされるのでwidthが縮小されても問題なく表示されるはずです。
                </p>
                <p className="text-xs text-gray-300">created-atの日付が入る予定です</p>
            </div>
        </li>
    )
}

export default TaskItem