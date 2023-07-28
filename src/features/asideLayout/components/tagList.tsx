'use client'
import React from "react";
import Tag from "./tag";
import AddTagInModal from "./addTagInModal";
import { PlusIcon } from "@heroicons/react/24/solid";

import { openModal } from '../../../redux/features/modalSlice'
import { useAppDispatch,useAppSelector } from "../../../redux/features/hooks";

const TagList : React.FC = () => {

    const dispatch = useAppDispatch()
    const { isOpen } = useAppSelector(state => state.modal)

    const onClickAddTagByModal = () => {
        dispatch(openModal())
    }

    return (
        <div className="flex flex-col gap-3 ">
            {isOpen && <AddTagInModal/>}
            <div className="flex justify-between items-center">
                <h4 className="text-gray-400">タグ一覧</h4>
                <button
                className="w-6 h-6 rounded-full text-red-500 hover:bg-red-500 hover:text-white"
                onClick={onClickAddTagByModal}>
                    <PlusIcon className="w-6"/>
                </button>
            </div>
            <ul className="flex flex-col gap-3">
                <Tag/>
                <Tag/>
                <Tag/>
            </ul>
        </div>
    )
}

export default TagList