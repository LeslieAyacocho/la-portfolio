import Image from 'next/image'

const ProjectTemplate = ({ data }) => {
    return (
        <div className='flex flex-col px-2 gap-y-4 text-li-black'>
            <div className='px-4 py-3 border bg-li-blue w-max border-li-black'>
                <h2 className='text-4xl font-semibold uppercase text-li-white'>{data?.title}</h2>
            </div>
            <div className='max-w-screen-lg px-2 '>
                {/* <div className='px-4 py-2 border border-li-black bg-li-blue w-max'> */}
                <h3 className='text-xl font-semibold uppercase text-li-black'>About</h3>
                {/* </div> */}
                <p className='py-3 text-lg'>{data?.about}</p>
            </div>
            <div className='flex w-full max-w-screen-lg gap-x-8'>
                {data?.role && (
                    <div className='w-full uppercase border border-li-black h-min'>
                        <h3 className='p-2 font-semibold border-b border-li-black bg-li-blue text-li-white'>
                            {data?.role?.length > 1 ? 'Roles' : 'Role'}
                        </h3>
                        <div className='flex flex-col p-2 bg-white'>
                            {data?.role?.map((item, index) => (
                                <p key={`roles-${index}`} className='text-li-black'>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                )}
                {data?.tech && (
                    <div className='w-full border border-li-black h-min'>
                        <h3 className='p-2 font-semibold uppercase border-b border-li-black bg-li-blue text-li-white'>Technologies Used</h3>
                        <div className='p-2 bg-white text-li-black'>
                            <a href={data?.url} target='_blank'>
                                {data?.url}
                            </a>
                        </div>
                    </div>
                )}
                {data?.url && (
                    <div className='w-full border border-li-black h-min'>
                        <h3 className='p-2 font-semibold uppercase border-b border-li-black bg-li-blue text-li-white'>Links</h3>
                        <div className='p-2 bg-white text-li-black'>
                            {data?.url?.map((item, index) => (
                                <div key={index} className='flex items-center uppercase'>
                                    {/* <GlobeAltIcon className='w-6 h-6'/> */}
                                    <a href={item.link} target='_blank' rel='noopener noreferrer'>
                                        {item.text}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div>
                {data?.img?.map((item, index) => (
                    <div key={`img-${index}`} className='text-li-black'>
                        <Image src={`/img${item?.link}`} width={item?.width} height={item?.height} className='object-cover w-full h-full' />
                    </div>
                ))}
                O
            </div>
        </div>
    )
}

export default ProjectTemplate
