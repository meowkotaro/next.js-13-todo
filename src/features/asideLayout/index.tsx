import React from "react";
import TagList from "./components/tagList";

const AsideLayout: React.FC = () => {
    return (
        <aside className='w-72 px-5 pt-7 flex flex-col justify-start items-start gap-5 bg-gray-900 text-white'>
            <TagList/>
        </aside>
    )
}

export default AsideLayout