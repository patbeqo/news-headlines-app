export function Footer() {
  return (
    <footer className="bg-cyan-600 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-teal-200 text-sm">
          © 2024 Patrik Beqo. All Rights Reserved.
        </p>
        <ul className="flex space-x-4 text-sm font-medium text-teal-200">
          <li>
            <a href="#" className="hover:underline">Trending</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Categories</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}