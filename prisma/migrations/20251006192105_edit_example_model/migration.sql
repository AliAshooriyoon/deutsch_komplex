/*
  Warnings:

  - You are about to drop the `example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."example";

-- CreateTable
CREATE TABLE "examples" (
    "id" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "examples_pkey" PRIMARY KEY ("id")
);
