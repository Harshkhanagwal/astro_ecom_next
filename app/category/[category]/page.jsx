import Card from "@/Components/Card/Card"
import '@/style/productGallery.css'

const page = () => {
  return (
    <>
      <section id="product-cards" className="main productGallery">
        <div className="container productGallery-inner">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}

export default page