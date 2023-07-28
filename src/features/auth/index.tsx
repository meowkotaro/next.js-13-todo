'use client'
import React, {useState, FormEvent} from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import supabase from "../../utils/supabase-client";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { userReset, updateUser } from "../../redux/features/userSlice";

const Auth: React.FC = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ isLogin, setIslogin ] = useState('')
    const dispatch = useAppDispatch()
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault()

        if(isLogin) {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            setEmail('')
            setPassword('')

            if(error) {
                alert(error.message)
            } else (
                router.refresh()
            )
        } else {
            const { error } = await supabase.auth.signUp({
                email,
                password
            })
            setEmail('')
            setPassword('')
            if(error) {
                alert(error.message)
            }
        }
    }

    const signOut = () => {
        supabase.auth.signOut()
    }

    return (
        <div className="flex items-center justify-center">
            <form></form>
        </div>
    )
}

export default Auth