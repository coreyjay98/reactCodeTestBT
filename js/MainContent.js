const MainContent = () => {
  return (
    <div className="mainContent">
      <h1 className="title">Search For An Article</h1>
      <div className="searchInputForm">
        <input name="searchInput" type="text"></input>
        <button>Search</button>
      </div>
      <div className="articleDisplay"></div>
    </div>
  );
};
