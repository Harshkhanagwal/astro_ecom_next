import './globals.css'
import '@/style/productgallery.css'
import Header from '@/Components/header/Header'
import Footer from '@/Components/Footer/Footer'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>


        {/* Header Component */}
        <Header />

        <main>

          {children}

        </main>
        <Footer />
      </body>
    </html>
  )
}
