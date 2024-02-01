import { IArticle, InfiniteScrollArticles } from "./components/infinit-scroll-articles";

interface IHomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: IHomeProps) {
  const selectedLanguage = searchParams.language || "en";
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?apiKey=${process.env.API_KEY}&language=${selectedLanguage}`
  );
  const topHeadlines = await data.json();
  const filteredArticles = topHeadlines.articles.filter(({ author }: IArticle) => author);

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-cyan-600 my-8">
        Top Headlines
      </h1>
      <InfiniteScrollArticles articles={filteredArticles} />
    </>
  );
}
