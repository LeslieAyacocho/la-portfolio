import Container from '@/components/ui/container'
import Card from '@/components/ui/card'

const WebDevelopments = () => {
    return (
        <div id='web-development' className='flex justify-center w-full bg-li-orange'>
            <Container>
                <div className='px-8 py-3 border bg-li-white w-max border-li-black'>
                    <h2 className='text-2xl font-semibold text-li-black'>Web Developments</h2>
                </div>
                <div>
                    <Card />
                </div>
            </Container>
        </div>
    )
}

export default WebDevelopments
