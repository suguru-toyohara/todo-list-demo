import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'redirect',
  description: 'redirect',
}

export default function RootLayout( props : {
    children: React.ReactNode
  }) {
    return (
    <html lang="ja">
        <body>
          {props.children}
        </body>
    </html>
    );
}
