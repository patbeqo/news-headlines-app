import { InfiniteScrollArticles } from "./components/infinite-scroll-articles";

interface IHomeProps {
  searchParams?: { [key: string]: string };
}

export default async function Home({ searchParams }: IHomeProps) {
  const selectedLanguage = searchParams?.language || "en";
  const url = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.API_KEY}&language=${selectedLanguage}`;
  const data = await fetch(url);
  const topHeadlines = await data.json();

  return (
    <div className="mx-5">
      <h1 className="text-3xl font-bold text-center text-cyan-600 my-8">
        Top Headlines
      </h1>
      <InfiniteScrollArticles key={selectedLanguage} articles={topHeadlines.articles} url={url} />
    </div>
  );
}
