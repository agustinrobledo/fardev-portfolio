import { PrismaClient } from "@prisma/client";
import Navbar from "../../src/components/navbar";
import Project from "../../src/components/project";

export default function ProjectInfo({project}){
    return (
        <>  
            <Navbar />
            <Project project={project}/>
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

