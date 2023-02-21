import NavBar from '../components/NavBar'
import '../styles/globals.css'
import localFont from '@next/font/local'
const anonymousPro = localFont({src: '../fonts/AnonymousPro-Regular.ttf'})

export default function App({ Component, pageProps }) {
  return (
    <>
    <style jsx global>{
      `html{
        font-family: ${anonymousPro};
      }`
    }</style>
    <Component {...pageProps} />
    <NavBar/>
  </>
  )
  
}
