import { useRouter } from 'next/router'
import { report } from 'process'
import React from 'react'

type Props = {
	product: any
}

const ProductDetail = ({ product }: Props) => {
	console.log(product)
	const route = useRouter()
	return <div className="m-auto p-3">{JSON.stringify(route.query)}</div>
}

export const getStaticPaths = async (context: any) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()

	const paths = data.map(({ id }: any) => ({
		params: { id: String(id) },
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context: any) => {
	console.log(context)
	const res = await fetch('https://jsonplaceholder.typicode.com/users/' + context.params.id)
	const data = await res.json()
	return {
		props: {
			product: data,
		},
	}
}

export default ProductDetail
