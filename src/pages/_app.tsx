import instance from '@/api/instance'
import Layout from '@/components/Layout'
import { AppPropsWithLayout } from '@/models/layout'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const LayoutWrapper = Component.Layout ?? Layout
	return (
		<LayoutWrapper>
			<SWRConfig value={{ fetcher: async (url) => await instance.get(url) }}>
				<Component {...pageProps} />
			</SWRConfig>
		</LayoutWrapper>
	)
}

export default MyApp
