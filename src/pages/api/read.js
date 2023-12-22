// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../libs/prisma"

export  default async function handler(req, res) {
  const user = await prisma.numeros.findMany({include:{pessoa: true}})
  res.status(200).json(user)
}
