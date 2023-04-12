import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handle() {

}

export async function getAllUsers() {
    const users = await prisma.user.findMany()
    return {
        props: {
            users
        }
    }
}
