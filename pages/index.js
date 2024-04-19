import Head from 'next/head'
import React from 'react'
import Sidebar from '@/components/Sidebar'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name='description' content="Twitter clone with Next.js and Firebase" />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
 
     <main className='flex min-h-screen max-w-7xl mx-auto '>
      {/* Sidebar */}
      <Sidebar/>

     {/* Feed */}
     
     
     {/* Widgets */}
     </main>
    </>
  )
}

export default HomePage