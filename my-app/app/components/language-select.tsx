"use client";

import { useSearchParams, useRouter } from "next/navigation";

const LANGUAGE_OPTIONS = [
  { value: "ar", label: "Arabic" },
  { value: "de", label: "German" },
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "he", label: "Hebrew" },
  { value: "it", label: "Italian" },
  { value: "nl", label: "Dutch" },
  { value: "no", label: "Norwegian" },
  { value: "pt", label: "Portuguese" },
  { value: "ru", label: "Russian" },
  { value: "sv", label: "Swedish" },
  { value: "zh", label: "Chinese" },
];

export function LanguageSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set("language", event.target.value);
    router.replace(`?${currentParams.toString()}`);
  };

  return (
    <select
      className="p-2 bg-white rounded-md border-2 border-gray-300 text-black"
      onChange={handleChange}
      defaultValue={searchParams.get("language") || "en"}
    >
      {LANGUAGE_OPTIONS.map(({ value, label }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
