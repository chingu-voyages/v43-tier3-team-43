import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export default function handler(req, res) {
  console.log("POST")
  if (req.method === 'POST') {
    const { displayName, email } = JSON.parse(req.body)
    console.log("Hello", displayName)
    createNewUser(displayName, email)

    res.status(200).send({status: "OK", message: "User created"})
  }
}

async function createNewUser(name, email) {
  try {
    const result = await prisma.user.create({
      data: {
        email,
        bio: "",
        displayName: name
      }
    }).then(user => console.log("POSTED", user))
  } catch (e) {
    console.log(e) 
  }
}