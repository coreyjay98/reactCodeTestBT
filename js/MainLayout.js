// Main Layout for page design, could be split into different components
const MainLayout = () => {
  return (
    <div className="App">
      {/* Header  */}
      <div className="navBar ">
        <div className="BTimage"></div>
        <h1 className="title">News</h1>
      </div>
      <MainContent />
      {/* Footer */}
      <div className="footer">
        <h4>BT React Code Test - by Corey Samuels - 4/04/21</h4>
      </div>
    </div>
  );
};
