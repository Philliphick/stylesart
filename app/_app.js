import { Ojuju } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const ojuju = Ojuju({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={ojuju.className}>
      
    </main>
  )
}