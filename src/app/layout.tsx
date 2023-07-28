import './globals.css'
import React from 'react';
import { usePathname } from 'next/navigation';
import HeaderLayout from '../features/headerLayout';
import AsideLayout from '../features/asideLayout';
import type { Metadata } from 'next'
import { Database } from "../../database.types";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { ReduxProvider } from '../redux/features/provider';

export const metadata: Metadata = {
  title: 'todo app',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if(pathname === '/login') 
  return (
    <></>
  )

  return (
    <html lang="ja">
      <body className='overflow-hidden bg-neutral-800'>
        <ReduxProvider>
          <HeaderLayout/>
          <main className={`h-[calc(100vh-48px)] flex`}>
            <AsideLayout/>
            <div className='flex-grow'>
                {children}
            </div>
          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}
