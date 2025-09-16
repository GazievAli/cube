import type { Metadata } from 'next'
import './styles/globals.css'

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// })

export const metadata: Metadata = {
	title: 'Cube Online',
	description: 'Cubik Rubik',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}

// className={`${geistMono.variable} antialiased`}
