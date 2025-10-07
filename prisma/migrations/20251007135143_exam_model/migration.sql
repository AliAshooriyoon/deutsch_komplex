-- CreateTable
CREATE TABLE "exams" (
    "id" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "examCenter" TEXT,
    "topic" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);
