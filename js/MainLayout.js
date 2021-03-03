// Main Layout for page design, could be split into different components
const MainLayout = () => {
  return (
    <div className="App">
      <div className="navBar ">
        <h1 className="title">BT React Code Test</h1>
      </div>
      <MainContent />
      <div className="footer">
        <h4>Corey Samuels 3/4/2021</h4>
      </div>
    </div>
  );
};
