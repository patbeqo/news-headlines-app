import { LanguageSelect } from "./language-select";

export function Header() {
  return (
    <nav className="flex bg-cyan-600 p-6 justify-between">
      <div className="flex items-center">
        <h1 className="font-bold mr-4">News App</h1>
        <a href="/" className="text-teal-200 hover:text-white mr-4">
          Trending
        </a>
        <a href="/categories" className="text-teal-200 hover:text-white mr-4">
          Categories
        </a>
      </div>
      <LanguageSelect />
    </nav>
  )
}