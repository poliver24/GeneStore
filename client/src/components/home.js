const home = () => {
    return (
      <div className="container content">
        <div className="row">
          <div className="col-sm-3 talk">
            <h1>GeneStore</h1>
            <br />
            <br />
            <h6>
              <a className="btn btn-dark start start-two" href="/genes">
                Genes
              </a>
              <a className="btn btn-dark start start-two" href="/proteins">
                Proteins
              </a>
            </h6>
          </div>
          <div className="col-sm-9 showcase-img">
            {/* <div className="circle"></div> */}
          </div>
        </div>
      </div>
    );
}

export default home