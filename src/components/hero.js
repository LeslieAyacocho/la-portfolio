import Container from '@/components/ui/container'

const Hero = () => {
    return (
        <div className='w-full bg-li-blue'>
            <div className='w-full max-w-screen-xl px-4 mx-auto md:px-0'>
                <nav className='flex justify-end w-full py-4'>
                    <div className='flex text-xl tracking-tight gap-x-8 text-li-white'>
                        <a href='#about' className='font-semibold uppercase hover:text-li-black'>
                            About
                        </a>
                        <a href='#web-development' className='font-semibold uppercase hover:text-li-black'>
                            Web Development
                        </a>
                        <a href='#web-design' className='font-semibold uppercase hover:text-li-black'>
                            Web Design
                        </a>
                        <a href='#' className='font-semibold uppercase hover:text-li-black'>
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
            <div className='flex items-center justify-center flex-1 w-full min-h-[90vh] bg-li-blue'>
                <Container>
                    <div className='text-center'>
                        <h1 class='text-5xl font-bold tracking-wider text-li-white'>LESLIE AYACOCHO</h1>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
