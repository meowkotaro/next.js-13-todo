import React from "react";
import TaskItem from "./taskItem";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../../database.types";
import { cookies } from "next/headers";
import AddButton from "./addButton";

const TaskList:React.FC = async () => {
    cookies()
    const supabase = createServerComponentClient<Database>({cookies})

    const { data: tasks } = await supabase
    .from('tasks')
    .select('*')
    .order('created_at', { ascending: true })
    
    console.log(tasks)
    return (
    <>
        <ul>
            {tasks?.map(task => (
                <TaskItem key={task.id} {...task} color="blue"/>
            ))}
        </ul>
        <AddButton/>
    </>


    )
}

export default TaskList