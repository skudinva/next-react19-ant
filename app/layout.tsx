import { AntdRegistry } from '@ant-design/nextjs-registry'
import '@ant-design/v5-patch-for-react-19'
import { ConfigProvider } from 'antd'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { theme } from './lib/theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'My App',
	description: 'Next.js + React 19 + Ant Design',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<AntdRegistry>
					<ConfigProvider theme={theme}>{children}</ConfigProvider>
				</AntdRegistry>
			</body>
		</html>
	)
}
