import Card from "@/Components/Card/Card"

const page = () => {
  return (
    <>
      <section id="product-cards" className="main productGallery">
        <div className="w100 container">
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