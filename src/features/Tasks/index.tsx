import React from "react";
import TasksHeader from "./components/header";
import TaskList from "./components/taskList";

const Tasks: React.FC = () => {
    return (
        <section className="flex-col items-center py-12 w-3/4 mx-auto">
            <TasksHeader/>
            <TaskList/>
        </section>
    )
}

export default Tasks