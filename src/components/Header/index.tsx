import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'
type Props = {}

const Header = (props: Props) => {
	return (
		<div>
			<ul className={styles.menu}>
				<li>
					<Link href="/">
						<a className={styles.menu__item}>Home page</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a className={styles.menu__item}>About</a>
					</Link>
				</li>
				<li>
					<Link href="/products">
						<a className={styles.menu__item}>Product</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a className={styles.menu__item}>Contact</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default Header
