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
      // <div className="container content">
      //   <div className="row">
      //     <div className="col-sm-3 talk">
      //       <h1>GENE STORE</h1>
      //       <br />
      //       <br />
      //       <h6>
      //         <a className="btn btn-dark start start-two" href="/genes">
      //           GENES
      //         </a>
      //         <a className="btn btn-dark start start-two" href="/proteins">
      //           PROTEINS
      //         </a>
      //       </h6>
      //     </div>
      //     <div className="col-sm-9 showcase-img">
      //       {/* <div className="circle"></div> */}
      //     </div>
      //   </div>
      // </div>
    );
}

export default home