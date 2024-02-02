"use client";

import React from "react";
import { Loader } from "./loader";

export interface IArticle {
  author: string;
  title: string;
  url: string;
  publishedAt: string;
  urlToImage: string | null;
}

interface IIfiniteScrollArticlesProps {
  articles: IArticle[];
  url: string;
}

export function InfiniteScrollArticles({
  articles: initialArticles,
  url
}: IIfiniteScrollArticlesProps) {
  const [page, setPage] = React.useState(1);
  const [articles, setArticles] = React.useState<IArticle[]>(initialArticles);

  const [reachedEnd, setReachedEnd] = React.useState(false);

  const loadMoreArticles = async () => {
    const nextPage = page + 1;
    const response = await fetch(url + `&page=${nextPage}`);
    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      setReachedEnd(true);
      return;
    }

    setArticles((prevArticles) => [...prevArticles, ...data.articles]);
    setPage(nextPage);
  }

  if (articles.length === 0) {
    return <div className="text-red-500 text-center">No articles found. Try selecting a different language. </div>;
  }

  return (
    <div className="md:grid md:grid-cols-4 gap-4 m-16">
      {articles.map(
        ({ author, title, url, publishedAt, urlToImage }: IArticle) => (
          <div
            key={url}
            className="mb-4 max-w-md rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between"
          >
            <div>
              {urlToImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={urlToImage}
                  alt="News Article Image"
                  width={500}
                  height={500}
                />
              ) : null}
              <div className="px-6 py-4">
                <div className="font-bold text-md mb-2">{title}</div>
                <p className="text-gray-700 text-base">{author}</p>
                <p className="text-gray-700 text-base">
                  {new Date(publishedAt).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <a href={url} className="text-blue-500 px-6 py-4">
              Read more
            </a>
          </div>
        )
      )}
      {!reachedEnd ? <Loader loadMore={loadMoreArticles} /> : null}
    </div>
  );
}
