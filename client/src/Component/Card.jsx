import "../style.css";

const Card = ({ item }) => {
  console.log(item);
  return item !== undefined ? (
    <div className="card">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${item.img}` }}
      ></div>
      <div className="card-desc">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="card-btn">
          {item.project && item.github ? (
            <>
              <button>
                <a href={item.project}>Project</a>
              </button>
              <button>
                <a href={item.github}>Github</a>
              </button>
            </>
          ) : (
            <>
              <button style={{width:"100%"}}>
                <a href={item.link}>Profile</a>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Card;
