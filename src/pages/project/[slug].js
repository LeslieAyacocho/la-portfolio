import Container from '@/components/ui/container'
import ProjectTemplate from '@/components/ui/project-template'
import { useRouter } from 'next/router'
import data from '@/static/data.json'

const Project = () => {
    const router = useRouter()
    const projectData = data[router.query.slug]

    return (
        <main className='min-h-screen bg-li-white'>
            <Container className='flex flex-col min-h-screen gap-y-8 border-x border-li-black'>
                <ProjectTemplate data={projectData} />
            </Container>
        </main>
    )
}

export default Project
