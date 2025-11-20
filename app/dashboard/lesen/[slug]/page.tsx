"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState, use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const Story = ({ params }: Props) => {
  // All hooks must be called at the top level, unconditionally
  const [story, setStory] = useState<{ id: string; title: string; content: string; level: string } | null>(null);

  // Unwrap params using the 'use' hook with explicit typing
  const resolvedParams = use(params) as { slug: string };
  const { slug } = resolvedParams;

  const getStory = async () => {
    try {
      const res = await fetch(`/api/getStory`, {
        method: "POST", body: JSON.stringify({ id: slug })
      }); // Pass slug to API for dynamic fetching
      if (!res.ok) {
        throw new Error("Failed to fetch story");
      }
      const data = await res.json();
      setStory(data);
    } catch (error) {
      console.error("Error fetching story:", error);
      // Optionally handle error state here
    }
  };

  useEffect(() => {
    if (slug) {
      getStory();
    }
  }, [slug]); // Depend on slug to refetch if it changes

  // Handle invalid slug or loading state
  if (!slug) {
    notFound();
  }

  if (!story) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Loading story...</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between flex-col  gap-12">
        <div className="flex justify-between">
          <div className="bg-red-500/40 rounded-full">
            <p className="text-xl text-red-700 px-3 py-2">
              {story.level.toUpperCase()}
            </p>
          </div>
          <Link href={'/dashboard/lesen'}
            className="text-red-700 pr-8 text-2xl cursor-pointer">
            Back</Link>
        </div>
        <div className="wrapper w-full h-0.5 bg-black rounded-3xl"></div>
        <div className="flex flex-col gap-12">
          <p className="text-3xl">{story.title}</p>
          <p className="text-lg leading-12">{story.content}</p>
        </div>
      </div>
    </>
  );
};

export default Story;
