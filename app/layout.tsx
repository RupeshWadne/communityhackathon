"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { paperWallet, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "mumbai"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      supportedWallets={[
        paperWallet({
          clientId: "cf8a2b6c-a665-4a59-bb97-595672bff958"
        })
      ]}
    >
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ThirdwebProvider>
  )
}
