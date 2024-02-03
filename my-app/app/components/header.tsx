'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LanguageSelect } from "./language-select";
import { Suspense } from "react";


function BaseHeader() {
  const searchParams = useSearchParams();

  return (
    <nav className="sm:flex bg-cyan-600 p-6 justify-between">
      <div className="flex items-center">
        <h1 className="font-bold mr-4">News App</h1>
        <Link href={`/?${searchParams.toString()}`} className="text-teal-200 hover:text-white mr-4">
          Trending
        </Link>
        <Link href={`/categories?${searchParams.toString()}`} className="text-teal-200 hover:text-white mr-4">
          Categories
        </Link>
      </div>
      <LanguageSelect />
    </nav>
  )
}

export function Header() {
  return (
    <Suspense fallback="Loading...">
      <BaseHeader />
    </Suspense>
  )
}