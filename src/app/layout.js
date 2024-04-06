import { Noto_Serif_Georgian } from 'next/font/google'
import './globals.css'

const georgian = Noto_Serif_Georgian({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Green & Sustainable Business Campaign',
  description: 'Green & Sustainable Business Campaign',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={georgian.className}>
        <main className="h-screen overflow-y-scroll">{children}</main>
      </body>
    </html>
  )
}
