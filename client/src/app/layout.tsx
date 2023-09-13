import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'



export const metadata: Metadata = {
  title: 'Maksim Kolyadin | Portfolio',
  description: "Hi, i'm addict electro-instrumental music, motion design and mounting videos.  ",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
          <Head>
            <link id="u-page-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"/>
          </Head>
      <body className="">{children}</body>
    </html>
  )
}
