import "./output.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Aditya Kulshrestha",
  description: "Official website for all of my blogs and projects.",
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
        <main className="flex-grow">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
