/* eslint-disable react-hooks/rules-of-hooks */
import useProduct from '@/hooks/use-product'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

const addProduct = () => {
	const router = useRouter()
	const id = router.query.id
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()
	useEffect(() => {
		if (!id) return
		readProduct(id).then((res) => reset(res))
	}, [id])
	const { data: products, error, update, readProduct } = useProduct()
	const onSubmit: SubmitHandler<any> = async (product) => {
		update(product)
	}
	return (
		<div>
			<form id="form-add-product" onSubmit={handleSubmit(onSubmit)}>
				<div className="shadow sm:rounded-md sm:overflow-hidden">
					<div className="mt-5 flex lg:mt-0 lg:ml-4">
						<div>
							<label htmlFor="about" className="block text-sm font-medium text-gray-700">
								Tên
							</label>
							<div className="mt-1">
								<input
									type="text"
									className="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 py-1 block w-full sm:text-sm border border-gray-300 rounded-md"
									placeholder="Tên Sản Phẩm"
									{...register('name', { required: true, minLength: 5 })}
								/>
							</div>
							<button
								type="submit"
								className=" m-3 btn inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Thêm mới sản phẩm
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default addProduct
