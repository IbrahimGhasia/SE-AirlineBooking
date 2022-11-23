import '../styles/globals.css';
import Head from 'next/head';
import { useState } from 'react';
import { AppProps } from 'next/app';
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

function MyApp({ Component, pageProps }) {
	const [colorScheme, setColorScheme] = useState('light');
	const toggleColorScheme = (ColorScheme) =>
		setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
	return (
		<>
			<Head>
				<title>Airline Booking System</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					withGlobalStyles
					withNormalizeCSS
					theme={{
						colorScheme,
					}}
				>
					<NotificationsProvider>
						<Component {...pageProps} />
					</NotificationsProvider>
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

export default MyApp;
