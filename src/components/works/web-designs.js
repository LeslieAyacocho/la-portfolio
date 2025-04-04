import Container from '@/components/ui/container'
import Card from '@/components/ui/card'
import Link from 'next/link'

const WebDesigns = () => {
    return (
        <section id='web-design' className='flex justify-center w-full'>
            <Container className='flex flex-col gap-y-8'>
                <div className='px-8 py-3 border bg-li-blue w-max border-li-black'>
                    <h2 className='text-2xl font-medium uppercase text-li-white'>Web Design</h2>
                </div>
                <div className='grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4 md:gap-10'>
                    <Link href='/project/apracsi'>
                        <Card image={'/web-design/apracsi.png'} title='APRACSI' description='2024' />
                    </Link>
                    <Link href='/project/gk-usa'>
                        <Card image={'/web-design/gk-usa.png'} title='GK - USA' description='2023' />
                    </Link>
                    <Link href='/project/csapi'>
                        <Card image={'/web-design/csapi.png'} title='CSAPI' description='2023' />
                    </Link>
                    <Link href='/project/cliqq'>
                        <Card image={'/web-design/cliqq.png'} title='CLiQQ - Redesign' description='2022' />
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default WebDesigns
