import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'GreenBud Event',
  description: 'Event by GreenBud',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="h-screen overflow-y-scroll">{children}</main>
      </body>
    </html>
  )
}
