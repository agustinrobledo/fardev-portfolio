import { PrismaClient } from "@prisma/client";
import Navbar from "../../src/components/navbar";
import Project from "../../src/components/project";

export default function ProjectInfo({project, info}){
    return (
        <>  
            <Navbar />
            <Project project={project} info={info}/>
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
    const info = await prisma.info.findMany()
    return {
        props: {
            project,
            info
        }
    }

}

