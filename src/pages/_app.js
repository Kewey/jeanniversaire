import '../styles/globals.css'
import { Rubik, Rubik_Beastly } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
})

const beastly = Rubik_Beastly({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-beastly',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${rubik.variable} ${beastly.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
