import Container from '@/components/ui/container'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const NAVIGATION = [
    { name: 'About', href: '#about' },
    { name: 'Web Development', href: '#web-development' },
    { name: 'Web Design', href: '#web-design' },
    { name: 'Contact', href: '#contact' },
]

const Hero = () => {
    return (
        <div className='w-full bg-li-blue'>
            <div className='w-full max-w-screen-xl px-4 mx-auto md:px-0'>
                <nav className='flex justify-end w-full py-4'>
                    <div className='hidden text-xl tracking-tight gap-x-8 text-li-white md:flex'>
                        {NAVIGATION?.map((item, index) => (
                            <Link key={`desktop-nav-${index}`} href={item?.href} className='font-semibold uppercase hover:text-li-black'>
                                {item?.name}
                            </Link>
                        ))}
                    </div>
                    <div className='md:hidden'>
                        <Menu>
                            <MenuButton className='inline-flex items-center'>
                                <Bars3Icon className='w-8 h-8 text-li-white' />
                            </MenuButton>
                            <Transition
                                enter='transition ease-out duration-75'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='transition ease-in duration-100'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <MenuItems anchor='bottom end' className='flex flex-col w-fullgap-y-4 bg-li-blue'>
                                    {NAVIGATION?.map((item, index) => (
                                        <MenuItem key={`mobile-nav-${index}`}>
                                            <Link href={item?.href} className='w-full font-semibold uppercase text-li-white hover:text-li-black hover:bg-li-white'>
                                                {item?.name}
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Transition>
                        </Menu>
                    </div>
                </nav>
            </div>
            <div className='flex items-center justify-center flex-1 w-full min-h-[90vh] bg-li-blue'>
                <Container>
                    <div className='text-center'>
                        <h1 className='text-2xl font-bold tracking-wider md:text-5xl text-li-white'>LESLIE AYACOCHO</h1>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
