/*
  Warnings:

  - Made the column `type` on table `exams` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "exams" ALTER COLUMN "type" SET NOT NULL;
