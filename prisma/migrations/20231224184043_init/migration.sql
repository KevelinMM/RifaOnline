/*
  Warnings:

  - You are about to alter the column `tipoPessoa` on the `Pessoa` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pessoa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipoPessoa" BOOLEAN NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numeroRua" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL
);
INSERT INTO "new_Pessoa" ("bairro", "cep", "cidade", "cpfCnpj", "email", "id", "nome", "numeroRua", "rua", "telefone", "tipoPessoa", "uf") SELECT "bairro", "cep", "cidade", "cpfCnpj", "email", "id", "nome", "numeroRua", "rua", "telefone", "tipoPessoa", "uf" FROM "Pessoa";
DROP TABLE "Pessoa";
ALTER TABLE "new_Pessoa" RENAME TO "Pessoa";
CREATE UNIQUE INDEX "Pessoa_cpfCnpj_key" ON "Pessoa"("cpfCnpj");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
