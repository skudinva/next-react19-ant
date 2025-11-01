'use client'

import '@ant-design/v5-patch-for-react-19'
import { Button, Card, Space, Typography } from 'antd'

const { Title, Paragraph } = Typography

export default function Home() {
	return (
		<div style={{ padding: '2rem' }}>
			<Card>
				<Title level={1}>Welcome to Next.js + React 19 + Ant Design</Title>
				<Paragraph>
					This is a sample page demonstrating Ant Design components in Next.js
					with React 19.
				</Paragraph>
				<Space>
					<Button type='primary'>Primary Button</Button>
					<Button>Default Button</Button>
					<Button type='dashed'>Dashed Button</Button>
					<Button type='link'>Link Button</Button>
				</Space>
			</Card>
		</div>
	)
}
