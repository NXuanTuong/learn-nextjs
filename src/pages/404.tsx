import React from 'react'
import LayoutEmpty from '../components/Layout/empty'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className='text-center mt-[20%]'> <span className='font-bold text-[30px]'>404</span> | <span>This page could not be found.</span></div>
  )
}

NotFound.Layout = LayoutEmpty

export default NotFound