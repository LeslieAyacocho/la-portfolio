import Container from '@/components/ui/container'

const Hero = () => {
    return (
        <div className='flex items-center justify-center flex-1 w-full min-h-[90vh]'>
            <Container>
                <div className='text-center'>
                    {/* <h1 class='text-5xl font-bold tracking-widest gradient bg-clip-text text-transparent bg-[linear-gradient(to_right,#312f32,#eb2f2c,#f5812a,#f5812a,#eb2f2c,#312f32)] bg-[length:200%_auto] animate-gradient'>
                        LESLIE JAYNE AYACOCHO
                    </h1> */}
                    <h1 class='text-5xl font-bold tracking-wider text-li-black'>
                        LESLIE JAYNE AYACOCHO
                    </h1>
                </div>
            </Container>
        </div>
    )
}

export default Hero
