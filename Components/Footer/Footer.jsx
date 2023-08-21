import '@/Components/Footer/Footer.css'

const Footer = () => {
    return (
        <footer className='main'>
            <div className="footer width100 container">
                <div className="footer-left-side">
                    <h2>People's Mall</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, reiciendis, quasi labore, doloremque veniam maiores reprehenderit nesciunt corporis aut ipsum obcaecati! Delectus quidem similique nobis. Dicta sequi non necessitatibus dolorem?</p>
                </div>
                <div className="footer-right-side">
                    <div className="footer-more-links">
                        <h2>More Links</h2>
                        <ul>
                            <li>Liked</li>
                            <li>Cart</li>
                            <li>Your Profile</li>
                        </ul>
                    </div>
                    <div className="footer-categories-links">
                        <h2>Categories</h2>
                        <p>Category 1</p>
                        <p>Category 2</p>
                        <p>Category 3</p>
                        <p>Category 4</p>
                        <p>About</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer