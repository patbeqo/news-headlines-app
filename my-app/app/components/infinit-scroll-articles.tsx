// "use client";

export interface IArticle {
  author: string;
  title: string;
  url: string;
  publishedAt: string;
  urlToImage: string | null;
}

interface IIfiniteScrollArticlesProps {
  articles: IArticle[];
}

export function InfiniteScrollArticles({
  articles,
}: IIfiniteScrollArticlesProps) {

  if (articles.length === 0) {
    return <div className="text-red-500 text-center">No articles found. Try selecting a different language. </div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 mx-16">
      {articles.map(
        ({ author, title, url, publishedAt, urlToImage }: IArticle) => (
          <div
            key={url}
            className="max-w-md rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between"
          >
            <div>
              {urlToImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={urlToImage}
                  alt="News Image"
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
            <div className="px-6 py-4">
              <a href={url} className="text-blue-500">
                Read more
              </a>
            </div>
          </div>
        )
      )}
    </div>
  );
}
