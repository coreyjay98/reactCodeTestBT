const MainContent = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const [articleFetch, setArticleFetch] = React.useState([]);
  const [fetching, setFetching] = React.useState(false);

  const userSearchType = ({ target }) => {
    setSearchInput(target.value);
  };

  const searchSubmitted = (event) => {
    event.preventDefault();
    if (searchInput === '') return;
    fetchData();
  };

  const fetchData = async () => {
    try {
      setFetching(true);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=c55dfcd58a2a468680d4cf21e68e51e0`
      );
      const result = await response.json();
      setArticleFetch(result.articles.slice(0, 10));
      setFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mainContent">
      <div className="searchInputForm">
        <input
          type="text"
          className="searchInput"
          placeholder="Search Articles..."
          onChange={userSearchType}
          onKeyDown={(event) => {
            if (event.key === 'Enter') searchSubmitted(event);
          }}
        ></input>
        <button className="searchButton" onClick={searchSubmitted}>
          Search
        </button>
      </div>
      <div className="articleDisplay">
        {fetching && (
          <div className="fetchIndicator">
            <h1>Searching...</h1>
          </div>
        )}
        {articleFetch.length > 1 &&
          !fetching &&
          articleFetch.map((article) => (
            <Article article={article} key={article.publishedAt} />
          ))}
      </div>
    </div>
  );
};
