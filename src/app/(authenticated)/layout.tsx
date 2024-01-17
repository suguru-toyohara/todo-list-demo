import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Divider } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo Apps',
  description: 'Dashboard',
}

function Header() {
  return (
    <header>
      <h1>Todo Apps</h1>
    </header>
  );
}

export default function RootLayout( props : {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <Divider />
        {props.children}
      </body>
    </html>
  );
}
