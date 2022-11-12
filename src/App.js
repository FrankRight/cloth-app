const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Men",
    },
    {
      id: 5,
      title: "Women",
    },
  ];
  return (
    <div className="categories container">
      {categories.map(({ id, title }) => (
        <div id={id} className="category-container">
          {/* <img /> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now!</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
