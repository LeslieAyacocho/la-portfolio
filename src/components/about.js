import Container from '@/components/ui/container'

const About = () => {
    return (
        <section id='about' className='flex justify-center w-full h-[20rem] md:h-[40rem] text-li-black'>
            <Container className='flex items-center justify-center flex-1 md:px-4 lg:px-0'>
                <div className='flex flex-col justify-center w-full gap-y-8 lg:flex-row gap-x-10'>
                    <div className='text-5xl font-semibold lg:text-right md:w-1/2'>
                        <p>Hi there!</p>
                    </div>
                    <div className='text-xl md:text-3xl'>
                        <p>Welcome to my portfolio, I'm Leslie.</p>
                        <p>I'm a Web Developer and Designer based in Taguig, Philippines.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About
