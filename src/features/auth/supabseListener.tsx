'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../redux/features/hooks";
import { updateUser } from "../../redux/features/userSlice";
import supabase from "../../utils/supabase-client";

export default function SupabaseListener({accessToken}: {accessToken?: string}) {
    const router = useRouter()
    const dispatch = useAppDispatch()

    useEffect(()=>{
        // session情報を取得する関数を非同期で
        const getUserInfo = async () => {
            const { data } = await supabase.auth.getSession()
            if(data.session) {
                console.log(data.session)
                dispatch(updateUser(
                    {
                        id: data.session.user.id, 
                        email: data.session.user.email!
                    }
                ))
            }
        }
        getUserInfo()

        // login logoutなどでセッション情報が変更されるたびに実行する関数
        supabase.auth.onAuthStateChange((_,session) => {
            console.log(session)
            dispatch(updateUser({
                id: session?.user.id,
                email: session?.user.email,
            }))
            if(session?.access_token !== accessToken){
                router.refresh()
            }
        })
    },[accessToken])

    return null
}