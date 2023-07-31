'use client'
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import supabase from "../../utils/supabase-client";
import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "@/redux/features/hooks";

const Auth: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIslogin] = useState(true)
    const router = useRouter()

    const user = useAppSelector(state => state.loginUser)


    const handleSubmit = async (e: FormEvent<HTMLElement>) => {
        e.preventDefault()

        if (isLogin) {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            setEmail('')
            setPassword('')

            if (error) {
                alert(error.message)
            } else (
                router.push('/')
                // router.refresh()
            )
        } else {
            const { error } = await supabase.auth.signUp({
                email,
                password
            })
            setEmail('')
            setPassword('')
            router.refresh()
            if (error) {
                alert(error.message)
            }
        }
    }

    const signOut = () => {
        supabase.auth.signOut()
        router.refresh()
    }

    return (
        <div className="position-center">
            <p className="text-white w-5 h-5">{user.email}</p>
            <div className="bg-gray-800 rounded border border-gray-500 w-96 h-72 relative">
                <form onSubmit={handleSubmit} className="position-center w-72">
                    <header
                        className="text-xl text-gray-200 font-bold flex justify-center items-start pb-5">
                        {isLogin ? 'ログイン' : 'サインアップ'}
                    </header>
                    <div className="rounded bg-slate-600 flex mb-5">
                        <label htmlFor="email" className="bg-slate-400 p-2 cursor-pointer">
                            <EnvelopeIcon className="w-6 h-6" />
                        </label>
                        <input
                            className="p-2 bg-slate-600 border-l-2 text-white focus:outline-none"
                            placeholder="Email"
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required />
                    </div>
                    <div className="rounded bg-slate-600 flex mb-5">
                        <label htmlFor="password" className="bg-slate-400 p-2 cursor-pointer">
                            <LockClosedIcon className="w-6 h-6" />
                        </label>
                        <input
                            className="p-2 bg-slate-600 border-l-2 text-white focus:outline-none"
                            placeholder="Password"
                            id="password"
                            type='password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className="flex justify-center items-start gap-3">
                        {isLogin ? (
                            <>
                                <button type="submit" className="flex items-center h-10 bg-slate-600">
                                    <h4 className=" px-2 text-lg text-gray-200">ログイン</h4>
                                    <div className="text-gray-700 bg-slate-400 h-10 w-10 relative border-l-2">
                                        <ArrowRightOnRectangleIcon className="w-9 position-center" />
                                    </div>
                                </button>
                            </>
                        ) : (
                            <button type="submit" className="flex items-center h-10 bg-slate-600">
                                <h4 className=" px-2 text-lg text-gray-200">サインアップ</h4>
                                <div className="text-gray-700 bg-slate-400 h-10 w-10 relative border-l-2">
                                    <ArrowRightOnRectangleIcon className="w-9 position-center" />
                                </div>
                            </button>
                        )
                        }
                    </div>
                </form>
                <button
                    className="flex items-center h-10 bg-slate-600"
                    onClick={signOut}>
                    <h4 className=" px-2 text-lg text-gray-200">ログアウト</h4>
                    <div className="text-gray-700 bg-slate-400 h-10 w-10 relative border-l-2">
                        <ArrowLeftOnRectangleIcon className="w-9 position-center" />
                    </div>
                </button>
                <button onClick={() => { setIslogin(!isLogin) }}>切り替え</button>
            </div>
        </div>
    )
}

export default Auth