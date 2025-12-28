/*
  Warnings:

  - A unique constraint covering the columns `[topic]` on the table `examples` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "examples_topic_key" ON "examples"("topic");
