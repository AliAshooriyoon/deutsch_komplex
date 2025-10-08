-- CreateTable
CREATE TABLE "stories" (
    "id" TEXT NOT NULL,
    "level" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "stories_pkey" PRIMARY KEY ("id")
);
