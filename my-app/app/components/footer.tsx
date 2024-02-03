'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BaseFooter() {

  const searchParams = useSearchParams();

  return (
    <footer className="bg-cyan-600 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-teal-200 text-sm">
          © 2024 Patrik Beqo
        </p>
        <ul className="flex space-x-4 text-sm font-medium text-teal-200">
          <li>
            <Link href={`/?${searchParams.toString()}`} className="hover:underline">Trending</Link>
          </li>
          <li>
            <Link href={`/categories?${searchParams.toString()}`} className="hover:underline">Categories</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export function Footer() {
  return (
    <Suspense fallback="Loading...">
      <BaseFooter />
    </Suspense>
  )
}