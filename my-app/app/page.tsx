import { LanguageSelect } from "./components/language-select";

export default async function Home() {
  console.log("key", process.env.API_KEY)
  const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`);
  const json = await data.json();
  console.log(json);
  return (
    <div>
      <h1 className="">These are the top headlines from America</h1>

      <LanguageSelect />

    </div>);
}
