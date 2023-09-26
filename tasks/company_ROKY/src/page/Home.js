import React, {useState, useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsListSearch} from '../store/actions/news';
import moment from "moment/moment";
import {ReactComponent as Right} from '../assets/icon/arrow-right-long-solid.svg'
import {value} from "lodash/seq";
import {Link, useNavigate} from 'react-router-dom';


function Home(props) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState('relevance'); // Изначально сортировка по релевантности

  const navigate = useNavigate();
  const newsListSearch = useSelector((store) => store.news.newsListSearch);

  const loadMore = useCallback(() => {
    if (!loading) {
      setLoading(true);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  useEffect(() => {
    const params = {
      q: searchValue,
      page: currentPage,
      'page-size': perPage,
      tags: selectedFilter,
      'show-fields': 'starRating,headline,thumbnail,short-url',
    };

    if (sortBy === 'relevance') {
      params['order-by'] = 'relevance';
    } else {
      params['order-by'] = 'newest';
    }

    dispatch(getNewsListSearch({value: params}));
  }, [dispatch, searchValue, selectedFilter, currentPage, perPage, sortBy]);

  const handleChange = (ev) => {
    setSearchValue(ev.target.value);

  };

  const handlePageChange = (ev) => {
    setCurrentPage(parseInt(ev.target.value, 10));
  };

  const handleSearch = () => {
    const params = {
      q: searchValue,
      page: 1,
      'page-size': perPage,
      tags: selectedFilter,
      'show-fields': 'starRating,headline,thumbnail,short-url',
      orderBy: sortBy,


  };

    dispatch(getNewsListSearch({ value: params })).then(() => {
      setCurrentPage(1);
      setSearchValue('');

    });


  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMore();
    }
  };

  const handlePerPageChange = (ev) => {
    setPerPage(parseInt(ev.target.value, 10));
  };

  const handleSortChange = (ev) => {
    setSortBy(ev.target.value);
  };



  const handleNews = (apiUrl) => {
    navigate(`/news/${apiUrl}`);
  };

  return (
    <div className='home'>
      <div className='home_search'>
        <div>
          <input
            type="text"
            onChange={handleChange}
            value={searchValue}
            placeholder='search...'
          />
          <button onClick={handleSearch}>Find</button>
        </div>
        <div className="home_filter">
          <div>
            <select value={sortBy} onChange={handleSortChange}>
              <option value='relevance'>Sort by Relevance</option>
              <option value='newest'>Sort by Newest</option>
            </select>
          </div>
          <div className='home_settings'>
            <label>Items on page:</label>
            <select value={perPage} onChange={handlePerPageChange}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </div>

          <div className='home_pagination'>
            <label>Select page:</label>
            <select value={currentPage} onChange={handlePageChange}>
              {Array.from({length: 20}, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

        </div>

      </div>

      <div className='home_news'>
        {newsListSearch?.map((i, index) => (
          <div key={i.id} className='home_news_items'>
            <img src={i.fields.thumbnail} alt=""/>
            <div className='home_articls'>
              <span>{moment(i.webPublicationDate).format('DD  MMMM YYYY, hh:mm:ss A')}</span>
              <p>{i.webTitle}</p>
            </div>


            <button className="home_btn_details" onClick={() => handleNews(i.apiUrl)}>
              Details <Right className="check_svg" />
            </button>

            {/*<button className='home_btn_details' onClick={()=>handleNews(i.id)}>Details*/}
            {/*  <Right className="check_svg"/>*/}
            {/*</button>*/}
            {index === newsListSearch.length - 1 && (
              <div style={{height: '20px'}}></div>
            )}
          </div>
        ))}
      </div>
      {loading && <p>Loading more news...</p>}
    </div>
  );
}

export default Home;





