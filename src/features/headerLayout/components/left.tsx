'use client'
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HeaderLeft: React.FC = () => {
    return (
        <div className="pl-4 flex gap-3">
            <Bars3Icon className="h-7 cursor-pointer text-blue-500"/>
            <HomeIcon className="h-7 text-blue-500"/>
            <form onSubmit={() => {}}>
                <div className="rounded flex w-52 h-7 bg-gray-400">
                    <div className="flex items-center">
                        <MagnifyingGlassIcon className="h-5 px-1 text-blue-500"/>
                    </div>
                    <input type="text" placeholder="検索" className="rounded bg-gray-400 placeholder-white text-sm flex-grow focus:outline-none "/>
                </div>
            </form>
        </div>

    )
}

export default HeaderLeft