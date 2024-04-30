import Container from '@/components/ui/container'

const About = () => {
    return (
        <div className='flex justify-center w-full bg-li-gold'>
            <Container>
                <div className='flex flex-col w-full p-16 md:flex-row gap-x-10'>
                    <div className='text-xl'>
                        <p>Hi there! 👋</p>
                    </div>
                    <div className='text-lg'>
                        <p>Welcome to my portfolio, I'm Leslie.</p>
                        <p>I'm a Web Developer and a UI/UX Designer based in Taguig, Philippines.</p>
                        <p>I also do graphic design that includes logo/branding and publication materials.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default About
