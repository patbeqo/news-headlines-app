import { CategorySelector } from "./components/category-selector";
import { IArticle, InfiniteScrollArticles } from "../components/infinite-scroll-articles";

interface IHomeProps {
  searchParams: { [key: string]: string };
}

export default async function FilterByCategory({ searchParams }: IHomeProps) {
  const selectedLanguage = searchParams.language || "en";
  const selectedCategory = searchParams.category || "general";
  const url = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.API_KEY}&language=${selectedLanguage}&category=${selectedCategory}`
  const data = await fetch(url);
  const topHeadlines = await data.json();

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-center text-cyan-600 my-8">Filter By Category</h1>
      <CategorySelector />
      <InfiniteScrollArticles key={`${selectedLanguage}-${selectedCategory}`} articles={topHeadlines.articles} url={url} />
    </div>
  );
}
