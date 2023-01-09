import type { AppProps } from 'next/app'
import '../styles/css/index.css'

export default function App({ Component, pageProps }: AppProps) {
	return <div className='app'>
		<div className="app__content">
			<Component {...pageProps} />
		</div>

		<div className="app__transition"></div>
	</div>
}
