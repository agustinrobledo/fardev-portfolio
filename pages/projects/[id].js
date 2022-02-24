import { PrismaClient } from "@prisma/client";


export default function ProjectInfo({project}){
    return (
        <>
            <h1>
                {project.name}
            </h1>
            <p>
                {project.description}
            </p>
            <video src={project.video} alt={project.name} controls/>
        </>
    )
}

export async function getStaticPaths(){
    const prisma = new PrismaClient()
    const projects = await prisma.projects.findMany()
    const paths = projects.map(project => ({
        params: {
            id: project.id.toString()
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }){
    const prisma = new PrismaClient()
    const project = await prisma.projects.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return {
        props: {
            project
        }
    }

}

