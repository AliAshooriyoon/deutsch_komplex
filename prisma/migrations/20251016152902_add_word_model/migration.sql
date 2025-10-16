-- CreateTable
CREATE TABLE "words" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "mean" TEXT NOT NULL,
    "level" TEXT,

    CONSTRAINT "words_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "words_title_key" ON "words"("title");
