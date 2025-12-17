/*
  Warnings:

  - A unique constraint covering the columns `[topic]` on the table `exams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "exams_topic_key" ON "exams"("topic");
