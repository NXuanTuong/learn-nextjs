import useProduct from '@/hooks/use-product'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Home = () => {
	const { data: products, error, create, remove } = useProduct()
	if (!products) return <div>...Loading</div>
	if (error) return <div>Falied</div>
	return (
		<div className={styles.container}>
			{products.map((product, index) => (
				<div key={index}>
					{product.name}
					<button>
						<Link href={`/products/edit-products/${product.id}`}>Edit</Link>
					</button>
					<button onClick={() => remove(product.id)}>Remove</button>
				</div>
			))}

			<button onClick={() => create({ id: 3, name: 'Product C' })}>Add</button>
		</div>
	)
}

export default Home
