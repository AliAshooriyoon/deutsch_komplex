/*
  Warnings:

  - A unique constraint covering the columns `[topic,level]` on the table `examples` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "examples_topic_key";

-- CreateIndex
CREATE UNIQUE INDEX "examples_topic_level_key" ON "examples"("topic", "level");
