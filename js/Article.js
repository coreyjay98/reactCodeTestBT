const Article = ({ article }) => {
  const contentCleaner = (content) => {
    if (!content) return;
    const regEx = /\[.*?\]/;
    return content.replace(regEx, '');
  };
  return (
    <div className="article">
      <div
        className="imageDiv"
        style={{
          backgroundImage: `url('${
            article.urlToImage ||
            'https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png'
          }')`,
          backgroundSize: 'cover',
        }}
      ></div>
      <span className="title">{article.title}</span>
      <span className="content">{contentCleaner(article.content)}</span>
      <p className="author">{article.author}</p>
      <a href={article.url}>
        <span className="link">{article.source.name}</span>
      </a>
    </div>
  );
};
