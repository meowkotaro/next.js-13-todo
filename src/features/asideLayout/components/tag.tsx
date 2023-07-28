'use client'
import React from "react";
import { TagIcon } from "@heroicons/react/24/solid";

const Tag : React.FC = () => {
    return (
        <li className="flex gap-1 items-center cursor-pointer">
            <TagIcon className="text-indigo-600 w-7"/>
            <h4 className="max-w-200 whitespace-nowrap overflow-hidden text-ellipsis">買い物リストaaaaaaaaaaaaaaaaaaaaaa</h4>
        </li>
    )
}

export default Tag