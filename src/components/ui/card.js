import Image from 'next/image'

const Card = ({ title, description, image }) => {
    return (
        <div className='w-full bg-white border divide-y cursor-pointer border-li-black divide-li-black'>
            <div className='overflow-hidden'>
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img${image}`} width={600} height={600} className='object-cover w-full h-full' />
            </div>
            <div className='p-5'>
                <h3 className='text-lg font-semibold tracking-tight uppercase md:text-2xl text-li-black'>{title}</h3>
                <p className='text-sm md:text-base text-li-black-600'>{description}</p>
            </div>
        </div>
    )
}

export default Card
