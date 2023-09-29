import React, {useCallback, useEffect, useState} from 'react';
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getNews} from "../store/actions/details";
import moment from "moment";

function NewsDetails() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const news = useSelector((store) => store.details.news);
  console.log(news, 22222222222)
  const {newsId} = useParams();
  const {id} = location.state;
  const params =
    {
      'show-fields': 'all',
    };

  useEffect(() => {

    dispatch(getNews({id, params}))
  }, []);


  const handleClick = useCallback(()=>{
    navigate('/')
  },[navigate])

  return (
    <div className='news'>
      <div className='news_header'>
        <div className='news_header_title'>
          <h2>{news?.fields?.headline}</h2>
        </div>
        <div className="news_header_date">
        <span>{moment(news?.fields?.lastModified).format('DD  MMMM YYYY, hh:mm:ss A')}</span>
          <button onClick={handleClick}>read on Guardian</button>
      </div>
      </div>
      <div className="news_content">
        <img src={news?.fields?.thumbnail} alt=""/>

      <div className="news_title">
      <h2>{news?.fields?.byline}</h2>



      <p>{news?.fields?.bodyText}</p>
      <h4>{news?.fields?.trailText}</h4>

    </div>


    </div>
    </div>

)
  ;
}

export default NewsDetails;
