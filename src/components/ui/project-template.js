import Image from 'next/image'

const ProjectTemplate = ({ data }) => {
    return (
        <div className='flex flex-col md:px-2 gap-y-4 text-li-black'>
            <div className='px-2'>
                <h2 className='text-4xl font-bold text-li-black'>{data?.title}</h2>
            </div>
            {data?.about && (
                <div className='px-2'>
                    <h3 className='text-xl font-semibold uppercase text-li-black'>About</h3>
                    <p className='py-3 text-lg'>{data?.about}</p>
                </div>
            )}
            <div className='flex flex-col gap-y-4'>
                {data?.role && (
                    <div className='w-full px-2'>
                        <h3 className='text-xl font-semibold uppercase text-li-black'>Roles</h3>
                        <ul className='flex flex-col p-2 gap-y-1'>
                            {data?.role.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {data?.tech && (
                    <div className='w-full px-2'>
                        <h3 className='text-xl font-semibold uppercase text-li-black'>Technologies Used</h3>
                        <ul className='flex flex-col p-2 gap-y-1'>
                            {data?.tech.map((item) => (
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {data?.url && (
                    <div className='w-full px-2'>
                        <h3 className='text-xl font-semibold uppercase text-li-black'>Links</h3>
                        <ul className='flex flex-col p-2 gap-y-1'>
                            {data?.url.map((item) => (
                                <li className='underline'>
                                    <a href={item?.link} target='_blank'>
                                        {item?.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div>
                {data?.img?.map((item, index) => (
                    <div key={`img-${index}`} className='text-li-black'>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img${item?.link}`}
                            width={item?.width}
                            height={item?.height}
                            className='object-cover w-full h-full'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectTemplate
