import Container from '@/components/ui/container'
import Card from '@/components/ui/card'
import Link from 'next/link'

const WebDevelopments = () => {
    return (
        <section id='web-development' className='flex justify-center w-full'>
            <Container className='flex flex-col gap-y-8'>
                <div className='px-8 py-3 border bg-li-blue w-max border-li-black'>
                    <h2 className='text-2xl font-medium uppercase text-li-white'>Web Development</h2>
                </div>
                <div className='grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 md:gap-10'>
                    <a href='https://impact.outsourceaccelerator.com/' target='_blank'>
                        <Card image={'/web-development/oir-2024.png'} title='OIR' description='2024' />
                    </a>
                    <Link href='/project/oats'>
                        <Card image={'/web-development/oats-2022.png'} title='OATS' description='2022' />
                    </Link>
                    <Link href='/project/cryptonews'>
                        <Card image={'/web-development/cryptonews-2021.png'} title='CryptoNews' description='2021' />
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default WebDevelopments
