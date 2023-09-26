import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function NewsDetails() {
  const { newsId } = useParams(); // Получаем параметр newsId из URL
  const [news, setNews] = useState(null);

  useEffect(() => {

    fetch(`https://content.guardianapis.com/news/${newsId}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error(error));

    const dummyNewsData = {
      title: 'News Title',
      content: 'This is the content of the news article.',
    };
    setNews(dummyNewsData);
  }, [newsId]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{news.title}</h2>
      <p>{news.content}</p>
    </div>
  );
}

export default NewsDetails;
