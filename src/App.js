import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import router from './routes/routing';

function App() {
	const loading = () => <p>loading...중입니다람지렁이가노래를한다</p>;

	return (
		<>
			<Suspense fallback={loading()}>
				<RecoilRoot>
					<ThemeProvider theme={theme}>
						<GlobalStyles />
						<RouterProvider router={router} />
					</ThemeProvider>
				</RecoilRoot>
			</Suspense>
		</>
	);
}

export default App;
