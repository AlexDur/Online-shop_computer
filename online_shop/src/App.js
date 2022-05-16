import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Computer",
      image:
        "https://drive.google.com/file/d/1dFvsX2UwetAYkUF2AEcA916yAYRO15ug/view?usp=sharing",
    },
    {
      id: 2,
      title: "Beamer",
      image:
        "https://drive.google.com/file/d/1Xe5tc_sec-aYu2T68YJljkWsJWhbE552/view?usp=sharingg",
    },
    {
      id: 3,
      title: "Grafikkarten",
      image:
        "https://drive.google.com/file/d/1kHPgiy9Xv4qWAUamyxAIoECj_Yf0PqhR/view?usp=sharing",
    },
    {
      id: 4,
      title: "NAS und DAS",
      image:
        "https://drive.google.com/file/d/1ciPe4gQ8a7p_54wxKWQfUZ6vMQifR2gB/view?usp=sharing",
    },
    {
      id: 5,
      title: "Server und Workstations",
      image:
        "https://drive.google.com/file/d/1R9t8kWsZ7EfIbn5jPhRKD2K7dqmSK7Ba/view?usp=sharing",
    },
  ];

  return (
    <div className="categories__container">
      {categories.map(({ title, id, image }) => (
        <div className="category__container" key={id}>
          <div
            className="category__image"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className="category__body">
            <h2>{title}</h2>
            <p>Kaufe jetzt</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
