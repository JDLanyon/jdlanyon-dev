// Import global styles and fonts
import { Overpass, Overpass_Mono, Doto } from "next/font/google";
import type { Metadata } from 'next'
import Button from '@/app/components/button'
import Footer from '@/app/components/footer'
import { ThemeProvider } from 'next-themes';

import "./globals.css";

 
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

// fonts
const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  display: 'swap',
})

const overpass_mono = Overpass_Mono({
  variable: "--font-overpass-mono",
  subsets: ["latin"],
  display: 'swap',
})

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  display: 'swap',
})

 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${overpass.variable} ${overpass_mono.variable} ${doto.variable}`} suppressHydrationWarning>
      <body className="min-h-[100vh]">
        <ThemeProvider defaultTheme="dark" enableSystem={false}>
          <div className="grid items-center justify-items-center h-screen w-screen p-8 gap-16 relative">
            <main className="flex flex-col gap-8 items-center text-center">
              <h1>404</h1>
              <h3>Page not found :&lt;</h3>
              <Button text="Home" href="/"/>
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}