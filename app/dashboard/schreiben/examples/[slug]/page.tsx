
"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useState, use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

const ExampleSchreiben = ({ params }: Props) => {
  // All hooks must be called at the top level, unconditionally
  const [example, setExample] = useState<{ id: string; topic: string; content: string; level: string } | null>(null);

  // Unwrap params using the 'use' hook with explicit typing
  const resolvedParams = use(params) as { slug: string };
  const { slug } = resolvedParams;

  const getExample = async () => {
    try {
      const res = await fetch(`/api/findExample`, {
        method: "POST", body: JSON.stringify({ id: slug })
      }); // Pass slug to API for dynamic fetching
      if (!res.ok) {
        throw new Error("Failed to fetch example");
      }
      const data = await res.json();
      setExample(data);
    } catch (error) {
      console.error("Error fetching example:", error);
      // Optionally handle error state here
    }
  };

  useEffect(() => {
    if (slug) {
      getExample();
    }
  }, [slug]); // Depend on slug to refetch if it changes

  // Handle invalid slug or loading state
  if (!slug) {
    notFound();
  }

  if (!example) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">Loading example...</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-between flex-col  gap-12">
        <div className="flex justify-between">
          <div className="bg-red-500/40 rounded-full">
            <p className="text-xl text-red-700 px-3 py-2">
              {example.level.toUpperCase()}
            </p>
          </div>
          <Link href={'/dashboard/schreiben'}
            className="text-red-700 pr-8 text-2xl cursor-pointer">
            Back</Link>
        </div>
        <div className="wrapper w-full h-0.5 bg-black rounded-3xl"></div>
        <div className="flex flex-col gap-12">
          <p className="text-3xl">{example.topic}</p>
          <p className="text-lg leading-12">{example.content}</p>
        </div>
      </div>
    </>
  );
};

export default ExampleSchreiben;
