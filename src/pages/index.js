import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Works from '@/components/works'
import Contact from '@/components/contact'

export const metadata = {
  title: 'Leslie Jayne Ayacocho',
}

export default function Home() {
    return (
        <main className='flex flex-col items-start justify-start min-h-screen font-mono bg-li-white'>
            <Header />
            <Hero />
            <About />
            <Works />
            <Contact />
        </main>
    )
}
