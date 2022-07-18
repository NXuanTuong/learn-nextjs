import Link from 'next/link'
import React from 'react'

type Props = {
	products: any[]
}

const Products = ({ products }: Props) => {
	return (
		<div>
			{products.map((item) => {
				return (
					<div className="m-auto p-3" key={item.id}>
						<ul>
							<li className="no-underline text-red-500">
								<Link href={`/products/${item.id}`}>{item.name}</Link>
							</li>
						</ul>
					</div>
				)
			})}
		</div>
	)
}

// Chạy ở server (ưu tiên chạy đầu)
export const getStaticProps = async (context: any) => {
	console.log(context)
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	return {
		props: {
			products: data,
		},
	}
}

export default Products
