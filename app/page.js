import Catagorycard from '@/Components/Catagorycard/Catagorycard'
import Herosection from '@/Components/Herosection.jsx/Herosection'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Herosection />
      <section id="categories" className='main'>
        <div className="inner_category_bx container">
          <Link href="/category/category" className='link'>
              <Catagorycard />
          </Link>

          <Link href="/category/category" className='link'>
              <Catagorycard />
          </Link>

          <Link href="/category/category" className='link'>
              <Catagorycard />
          </Link>

          <Link href="/category/category" className='link'>
              <Catagorycard />
          </Link>

          <Link href="/category/category" className='link'>
              <Catagorycard />
          </Link>

          <Link href="/category/category" className='link'>
              <Catagorycard />
          </Link>

        </div>
      </section >
    </>

  )
}
