import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import {Rubik} from "next/font/google"
import Head from 'next/head'

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik'
})

export default function App({ Component, pageProps }) {
  return (
    <>

    <Head>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href='/images/profile/peacock-logo.png' />
    </Head>

    <main className={`${rubik.variable} dark:bg-dark font-mont bg-light w-full min-h-screen`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />


    </main>


    </>
    

);
}

// anything i pass here will treated as the new page
// will need to learn more about the paths and props