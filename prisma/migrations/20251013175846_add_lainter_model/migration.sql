-- CreateTable
CREATE TABLE "lainter" (
    "id" TEXT NOT NULL,
    "level" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "mean" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "lainter_pkey" PRIMARY KEY ("id")
);
