import "./home.css";

const home = () => {
    return (
      <div>
        <div className="split left">
          <h1>GENE STORE</h1>
        </div>
        <div className="split right">
          <div className="link">
            <a className="element" href="/genes">
              GENES
            </a>
          </div>
          <div className="link">
            <a className="element" href="/proteins">
              PROTEINS
            </a>
          </div>
        </div>
      </div>
    );
}

export default home