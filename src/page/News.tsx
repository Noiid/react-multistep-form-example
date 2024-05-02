import { useCallback, useEffect, useState } from "react";
import FetchData from "../Utils/Fetch";
import { ItemNews, PageNews } from "../types/News";

const News = () => {
  const [data, setData] = useState<ItemNews[]>();

  //   const options = {
  //     method: "GET",
  //   };

  const fetchNews = useCallback(async () => {
    const response: PageNews = await FetchData(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=2af7ed098d51450bbedacc2e98d2b1ea"
    );
    setData(response.articles);
  }, []);

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <h1>News Page </h1>
      <ul>
        {data &&
          data.map((item) => (
            <li>
              <b>Author:</b> {item.author} <br />
              <b>Title:</b> {item.title} <br />
              <b>Description:</b> {item.description} <br />
              <img src={item.urlToImage} alt="" />
            </li>
          ))}
      </ul>
    </>
  );
};

export default News;
