import './CardBtn.css'
import Link from 'next/link'
export const CardBtn = () => {
    return (
        <>
        <Link href={'/product/product'}>
            <button className='cardBtn'>
                Book Now
            </button>
        </Link>
        </>
    )
}
export default CardBtn