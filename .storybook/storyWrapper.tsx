import React from 'react';
import '../src/app/globals.css'
import type { Metadata } from 'next'
import { ReduxProvider } from '../src/redux/features/provider';

export const metadata: Metadata = {
  title: 'todo app',
  description: 'Generated by create next app',
}

export default function StoryWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className='overflow-hidden bg-neutral-800'>
        <ReduxProvider>
            {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
