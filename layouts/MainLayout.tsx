import React from 'react'
import Meta from './components/meta'
import Navbar from './components/navbar'

type Props = {
    title: string;
    children: React.ReactNode
}

const MainLayout = ({title, children}: Props) => {
  return (
    <>
        <Meta title={title}></Meta>
        <header>
            <Navbar />
        </header>
        <main>
            {children}
        </main>
    </>
  )
}

export default MainLayout