import Container from '@/components/ui/container'
import ProjectTemplate from '@/components/ui/project-template'
import { useRouter } from 'next/router'

const Project = () => {
    const router = useRouter()
    return (
        <main className='min-h-screen bg-li-white'>
            <Container className='flex flex-col min-h-screen gap-y-8 border-x border-li-black'>
                <ProjectTemplate />
            </Container>
        </main>
    )
}

export default Project
