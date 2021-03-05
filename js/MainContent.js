const MainContent = () => {
  /* State for Input  */
  const [searchInput, setSearchInput] = React.useState('');
  /* State for storing fetch results */
  const [articleFetch, setArticleFetch] = React.useState([]);
  /* State to show if fetching or not currently  */
  const [fetching, setFetching] = React.useState(false);
  /* State for Error */
  const [fetchError, setFetchError] = React.useState(false);

  /* Input watcher to set input state */
  const userSearchType = ({ target }) => {
    setSearchInput(target.value);
  };

  /* On search button click it runs fetch, if empty it returns  */
  const searchSubmitted = (event) => {
    event.preventDefault();
    if (searchInput === '') return;
    fetchData();
  };

  const fetchData = async () => {
    try {
      setFetchError(false);
      /* Allows 'Searching...' on screen */
      setFetching(true);
      /* Fetch using users input */
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=c55dfcd58a2a468680d4cf21e68e51e0`
      );
      const result = await response.json();
      /* Getting first 10 results from fetch */
      setArticleFetch(result.articles.slice(0, 10));
      setFetching(false);
    } catch (error) {
      setFetchError(true);
      setFetching(false);
      setArticleFetch([]);
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
            /* Allows user to press enter to search  */
            if (event.key === 'Enter') searchSubmitted(event);
          }}
        ></input>
        <button className="searchButton" onClick={searchSubmitted}>
          Search
        </button>
      </div>
      <div className="articleDisplay">
        {/* Indicate When user is searching  */}
        {fetching ? (
          <div className="fetchIndicator">
            <h1>Searching...</h1>
          </div>
        ) : null}
        {fetchError && (
          <div className="errorIndicator">
            <h1>We're Sorry there seems to be an error, please try again!</h1>
          </div>
        )}
        {/* Map Through the data Fetch if not fetching */}
        {articleFetch.length > 1 &&
          !fetching &&
          articleFetch.map((article) => (
            <Article article={article} key={article.publishedAt} />
          ))}
      </div>
    </div>
  );
};
