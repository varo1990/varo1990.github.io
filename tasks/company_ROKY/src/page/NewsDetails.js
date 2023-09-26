import React from 'react';

function NewsDetails({ news }) {
  return (
    <div className='news-details'>
      <h2>{news.webTitle}</h2>
      <p>Date: {news.webPublicationDate}</p>
      <p>{news.fields.starRating} stars</p>
      <p>{news.fields.shortUrl}</p>
    </div>
  );
}

export default NewsDetails;