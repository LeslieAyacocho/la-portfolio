const ProjectTemplate = () => {
    return (
        <div className='flex flex-col px-2 gap-y-4 text-li-black'>
            <div className='px-4 py-3 border bg-li-blue w-max border-li-black'>
                <h2 className='text-2xl font-semibold uppercase text-li-white'>Lorem Ipsum Dolor</h2>
            </div>
            <div className='max-w-screen-lg'>
                <div className='px-4 py-2 border border-li-black bg-li-blue w-max'>
                    <h3 className='text-xl font-semibold uppercase text-li-white'>About</h3>
                </div>
                <p className='px-2 py-3 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <div className='flex w-full max-w-screen-md gap-x-8'>
                <div className='w-full uppercase border border-li-black h-min'>
                    <h3 className='p-2 font-semibold border-b border-li-black bg-li-blue text-li-white'>Role</h3>
                    <p className='p-2 bg-white'>Web Designer</p>
                </div>
                <div className='w-full border border-li-black h-min'>
                    <h3 className='p-2 font-semibold uppercase border-b border-li-black bg-li-blue text-li-white'>URL</h3>
                    <div className='p-2 bg-white'>
                        <a href='#'>https://sample.com</a>
                    </div>
                </div>
            </div>
            <div>{/* <Image src={`/img${image}`} className='object-cover w-full h-full' /> */}</div>
        </div>
    )
}

export default ProjectTemplate
