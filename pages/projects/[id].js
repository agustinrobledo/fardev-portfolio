import { PrismaClient } from "@prisma/client";


export default function ProjectInfo({project}){
    console.log(project)
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

export async function getServerSideProps({ query }) {
    const prisma = new PrismaClient()
    const project = await prisma.projects.findUnique({
        where: {
            id: Number(query.id)
        }
    })
    return {
        props: {
            project
        }
    }
}

