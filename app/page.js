import Catagorycard from '@/Components/Catagorycard/Catagorycard'
import Herosection from '@/Components/Herosection.jsx/Herosection'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Herosection />
      <section id="categories" className='main'>
        <div className="inner_category_bx container">
          <Catagorycard />
          <Catagorycard />
          <Catagorycard />
          <Catagorycard />
          <Catagorycard />
          <Catagorycard />

        </div>
      </section >
    </>

  )
}
