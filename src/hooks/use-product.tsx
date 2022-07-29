import { add, edit, read, removeItem } from '@/api/product'
import useSWR from 'swr'

const useProduct = () => {
	const { data, error, mutate } = useSWR('/products')

	const create = async (item) => {
		const product = await add(item)
		mutate([...data, product])
	}

	const remove = async (id) => {
		await removeItem(id)
		const newProduct = data.filter((item) => item.id !== id)
		mutate(newProduct)
	}
	const readProduct = async (id: any) => {
		console.log(id)
		const details = await read(id)
		return details
	}
	const update = async (product) => {
		await edit(product)
		mutate(data.map((item) => (item.id === data.id ? product : item)))
	}
	return {
		data,
		error,
		create,
		remove,
		update,
		readProduct,
	}
}

export default useProduct
