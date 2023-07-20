import Button from '@/Components/Button/Button'
import '@/style/Product.css'

const page = () => {
    return (
        <>
        <section id='Product-Page' className='main'>
            <div className="Product container">
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
                        <h1>Product Title</h1>
                    </div>
                    <div className="product-description">
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa laboriosam recusandae sit optio ex sapiente aliquid mollitia, consequuntur quis, fugit error velit quasi! Nisi temporibus eveniet eius hic animi eligendi!</p>
                    </div>
                    <div className="conductor">
                        <div className="conduct">
                            <h3>who will conduct</h3>
                            <p>This Pooja will perform by “Johen”</p>
                        </div>
                        <div className="conductor-image">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="product-order">
                        <h4>₹ 999 /-</h4>
                        <Button>Book Now</Button>
                    </div>
                </div>
            </div>
        </section>
        <section id='product-FAQs' className='main'>
            <div className="container questions-area">
                <div className="questionbox">
                    <h2>What are its Benefits?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam neque et nemo molestiae earum, impedit, ad ducimus fugit numquam quibusdam nobis pariatur excepturi quo repudiandae itaque praesentium omnis tempora?</p>
                </div>
                <div className="questionbox">
                    <h2>What are its Benefits?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam neque et nemo molestiae earum, impedit, ad ducimus fugit numquam quibusdam nobis pariatur excepturi quo repudiandae itaque praesentium omnis tempora?</p>
                </div>
                <div className="questionbox">
                    <h2>What are its Benefits?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam neque et nemo molestiae earum, impedit, ad ducimus fugit numquam quibusdam nobis pariatur excepturi quo repudiandae itaque praesentium omnis tempora?</p>
                </div>
                <div className="questionbox">
                    <h2>What are its Benefits?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam neque et nemo molestiae earum, impedit, ad ducimus fugit numquam quibusdam nobis pariatur excepturi quo repudiandae itaque praesentium omnis tempora?</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default page