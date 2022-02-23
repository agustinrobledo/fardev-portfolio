import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const experience = await prisma.experience.findMany()
    res.json(experience)
}