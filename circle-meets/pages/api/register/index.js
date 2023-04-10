
const prisma = new PrismaClient()


export default function handler(req, res) {
    // Get data from your database
    if (req.method === 'POST') {
      console.log(req)
      /*
    prisma.users.findFirst({
      where: {
        email: 
      }
    })

    */
    res.status(200).json(users)
  }
}