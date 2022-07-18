import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
        <ul className='menu'>
            <li><Link href="/"><a className='menu__item'>Home page</a></Link></li>
            <li><Link href="/about"><a className='menu__item'>About</a></Link></li>
            <li><Link href="/products"><a className='menu__item'>Product</a></Link></li>
            <li><Link href="/contact"><a className='menu__item'>Contact</a></Link></li>
        </ul>
    </div>
  )
}

export default Header