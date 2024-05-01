import Container from '@/components/ui/container'

const Header = () => {
    return (
        <div className='w-full'>
            <Container className='py-0'>
                <nav className='flex justify-end w-full py-4'>
                    <div className='flex text-xl tracking-tight gap-x-6 text-li-black'>
                        <a href='#' className='font-semibold uppercase hover:text-li-red'>
                            About
                        </a>
                        <a href='#web-development' className='font-semibold uppercase hover:text-li-red'>
                            Web Developments
                        </a>
                        <a href='#web-design' className='font-semibold uppercase hover:text-li-red'>
                            Web Designs
                        </a>
                        <a href='#' className='font-semibold uppercase hover:text-li-red'>
                            Contact
                        </a>
                    </div>
                </nav>
            </Container>
        </div>
    )
}

export default Header
