import Button from '@/Components/Button/Button'
import '@/style/Product.css'

const page = () => {
    return (
        <section id='Product-Page'>
            <div className="Product">
                <div className="product-images">
                    <div className="product-additional-images">
                        <div className="product-additional-image">
                            <img src="" alt="" />
                        </div>
                        <div className="product-additional-image">
                            <img src="" alt="" />
                        </div>
                        <div className="product-additional-image">
                            <img src="" alt="" />
                        </div>
                        <div className="product-additional-image">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="product-main-image">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="product-details">
                    <div className="product-title">
                        <h3>Product Title</h3>
                    </div>
                    <div className="product-description">
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa laboriosam recusandae sit optio ex sapiente aliquid mollitia, consequuntur quis, fugit error velit quasi! Nisi temporibus eveniet eius hic animi eligendi!</p>
                    </div>
                    <div className="conductor">
                        <div className="conduct">
                            <h5>who will conduct</h5>
                            <p>This Pooja will perform by “Johen”</p>
                        </div>
                        <div className="conductor-image">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="product-order">
                        <h4>$ 999 /-</h4>
                        <Button>Book Now</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page