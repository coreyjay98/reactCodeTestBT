const MainContent = () => {
  return (
    <div className="mainContent">
      <h1 className="title">Search For An Article</h1>
      <div className="searchInputForm">
        <input name="searchInput" className="searchInput" type="text"></input>
        <button>Search</button>
      </div>
      <div className="articleDisplay">
        {/* Rendering test Articles created to see what article would look like for styling */}
        <TestArticle />
        <TestArticle />
        <TestArticle />
      </div>
    </div>
  );
};
