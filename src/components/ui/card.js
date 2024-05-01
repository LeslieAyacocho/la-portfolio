import Image from 'next/image'

const Card = ({ title, description, children }) => {
    return (
        <div className='bg-white border w-max border-li-black'>
            <div className='w-[30rem] h-[30rem] overflow-hidden'>
                <Image src='/img/main.png' width={1280} height={853} className='object-cover w-full h-full' />
            </div>

            <div>
                <h3>{title}</h3>
                <h3>{description}</h3>
            </div>
        </div>
    )
}

export default Card
