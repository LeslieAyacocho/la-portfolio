import Hero from '@/components/hero'
import About from '@/components/about'
import Works from '@/components/works'
import Contact from '@/components/contact'

export const metadata = {
    title: 'Leslie Jayne Ayacocho',
}

export default function Home() {
    return (
        <main className='flex flex-col items-start justify-start min-h-screen font-mono divide-y bg-li-white divide-li-black'>
            <Hero />
            <About />
            <Works />
            <Contact />
        </main>
    )
}
