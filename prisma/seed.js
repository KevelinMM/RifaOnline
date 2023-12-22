const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 80; i++) {
    await prisma.numeros.create({
        data: {
            numero : i,
        }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
