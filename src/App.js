import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import router from './routes/routing';
import Error from './pages/Error/Error';

function App() {
	const loading = () => <p>loading...중입니다람지렁이가노래를한다</p>;

	const ErrorFallback = error => {
		console.log('error', error.message);
		return <Error />;
	};

	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Suspense fallback={loading()}>
				<RecoilRoot>
					<ThemeProvider theme={theme}>
						<GlobalStyles />
						<RouterProvider router={router} />
					</ThemeProvider>
				</RecoilRoot>
			</Suspense>
		</ErrorBoundary>
	);
}

export default App;
