import type { AppProps } from 'next/app'
import '../styles/css/index.css'

import { Provider } from 'react-redux'
import { store } from '../redux/store'


export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className='app'>
			<div className="app__content">
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</div>

			<div className="app__transition"></div>
		</div>
	)
}
