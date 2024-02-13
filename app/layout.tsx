import { Metadata } from 'next';
import "./global.css";

export const metadata: Metadata = {
  title: 'Your daily stoic motivational website.',
  description: 'The official stoic web to help you with your life.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }