import Container from '@/components/ui/container'
import Card from '@/components/ui/card'

const WebDevelopments = () => {
    return (
        <section id='web-development' className='flex justify-center w-full'>
            <Container className='flex flex-col gap-y-8'>
                <div className='px-8 py-3 border bg-li-blue w-max border-li-black'>
                    <h2 className='text-2xl font-medium uppercase text-li-white'>Web Development</h2>
                </div>
                <div className='grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4 md:gap-10'>
                    {/* <Card image={'/web-design/apracsi.png'} title='APRACSI' description='2024' />
                    <Card image={'/web-design/gk-usa.png'} title='GK - USA' description='2023' />
                    <Card image={'/web-design/csapi.png'} title='CSAPI' description='2023' />
                    <Card image={'/web-design/cliqq.png'} title='CLiQQ - Redesign' description='2022' /> */}
                </div>
            </Container>
        </section>
    )
}

export default WebDevelopments
