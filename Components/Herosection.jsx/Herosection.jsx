import './Herosection.css'
const Herosection = () => {
    return (
        <section id='heroSection' className="main herosection">
            <div className="hero-container herobx">
                <div className="heroImg">
                    <img src="/images/herobanner.jpg" width={300} alt="hero section" />
                </div>
                <div className="herocontent width100">
                    <h1>People's Mall</h1>
                    <div className="colorbar"></div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure iste amet libero dolorem neque, sint sapiente soluta totam! Modi repellendus enim velit eveniet, aperiam ducimus eaque doloremque libero repudiandae nulla!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Herosection