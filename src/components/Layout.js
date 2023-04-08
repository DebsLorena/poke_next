import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
    <Head>
      <link rel='shortcut icon' href='/imagens/favicon.ico'/>
    </Head>
    <Navbar/>
    <main className='main-container'>{children}</main>
    <Footer/>
    </>
  )
}
