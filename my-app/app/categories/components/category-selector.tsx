'use client';

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

const CATEGORY_OPTIONS = [
  {
    value: "business",
    label: "Business",
  },
  {
    value: "entertainment",
    label: "Entertainment",
  },
  {
    value: "general",
    label: "General",
  },
  {
    value: "health",
    label: "Health",
  },
  {
    value: "science",
    label: "Science",
  },
  {
    value: "sports",
    label: "Sports",
  },
  {
    value: "technology",
    label: "Technology",
  }
]

function BaseCategorySelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set("category", event.target.value);
    router.replace(`?${currentParams.toString()}`);
  };

  return (
    <select
      className="p-2 bg-white rounded-md border-2 border-gray-300 text-black h-12 w-full mx-auto sm:w-1/4"
      onChange={handleChange}
      defaultValue={searchParams.get("category") || "general"}
    >
      {CATEGORY_OPTIONS.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export function CategorySelector() {
  return (
    <Suspense fallback="Loading...">
      <BaseCategorySelector />
    </Suspense>
  )
}
