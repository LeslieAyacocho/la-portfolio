import Container from '@/components/ui/container'

const Contact = () => {
    return (
        <section id='contact' className='flex justify-center w-full bg-li-black text-li-white'>
            <Container>
                <div className='flex flex-col w-full text-2xl font-medium uppercase text-white md:flex-row gap-x-10'>
                    Contact Me
                </div>
                <ul className='py-3 flex flex-col gap-y-3'>
                    <li><a href="mailto:lesliejayne.ayacocho@gmail.com" target='_blank'>Email</a></li>
                    <li><a href="https://linkedin.com/in/leslie-ayacocho" target='_blank'>LinkedIn</a></li>
                    <li><a href="https://github.com/LeslieAyacocho/" target='_blank'>Github</a></li>
                </ul>
            </Container>
        </section>
    )
}

export default Contact
