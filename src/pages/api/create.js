// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../libs/prisma";

export default async function handler(req, res) {
  const body = req.body;

  // Verificar se todos os numero solicitados estão disponiveis
  for (let i = 0; i < body.numerosId.length; i++) {
    const existeNumero = await prisma.numeros.findUnique({
      where: { id: body.numerosId[i] },
    });
    if (!existeNumero) {
      res.status(406).json(`Número ${body.numerosId[i]} não existe!`);
    }

    const getNumeros = await prisma.numeros.findUnique({
      where: { id: body.numerosId[i], disponivel: false },
    });
    if (getNumeros) {
      res.status(406).json(`Número ${body.numerosId[i]} não está disponível!`);
    }
  }

  let pessoaId;

  //Verificar se o usuário ja existe pelo ceu CPF ou CNPJ, se já realizou uma compra.
  const getPessoa = await prisma.pessoa.findUnique({
    where: { cpfCnpj: body.cpfCnpj },
  });

  //Se já existe, associar a compra o usuário
  if (getPessoa) {
    pessoaId = getPessoa.id;
  } else {
    //Se não, criar o usuário
    const newPessoa = await prisma.pessoa.create({
      data: {
        nome: body.nome,
        tipoPessoa: body.tipoPessoa,
        cpfCnpj: body.cpfCnpj,
        telefone: body.telefone,
        email: body.email,
        cep: body.cep || "",
        bairro: body.bairro || "",
        rua: body.rua || "",
        numeroRua: body.numeroRua || "",
        cidade: body.cidade || "",
        uf: body.uf || "",
      },
    });
    pessoaId = newPessoa.id;
  }

  // Associar o número da rifa ao usuário
  for (let i = 0; i < body.numerosId.length; i++) {
    await prisma.numeros.update({
      where: {
        id: body.numerosId[i],
      },
      data: {
        pessoaId: pessoaId,
        disponivel: false,
      },
    });
  }

  res.status(200).json("Números comprados com sucesso!");
}
