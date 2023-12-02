import "./output.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: "#020521"
}

export const metadata = {
  title: "Aditya Kulshrestha",
  description: "Official website for all of my blogs and projects.",
  metadataBase: new URL('https://adikul.dev'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow mt-[60px]">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
