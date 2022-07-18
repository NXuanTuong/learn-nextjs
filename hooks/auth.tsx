import useSWR, { useSWRConfig } from 'swr'
import { listUser, signup } from '../api/auth'

export const useAuth = () => {
	const fetcher = async (url: string) => {
		const { data } = await listUser(url)
		return data
	}
	const { data, error } = useSWR('/users', fetcher)
	const { mutate } = useSWRConfig()

	const register = (user) => {
		const account = user
		mutate('/users', async () => {
			const { data: user } = await signup(account)
			return [...data, user]
		})
	}

	return {
		data,
		error,
		register,
	}
}
