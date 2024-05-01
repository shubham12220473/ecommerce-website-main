import React from "react";
import Product from "./Products";
const Home = () => {
  return (
    <div className="homePage">
      <div className="card text-bg-dark text-white border-0">
        <img
          src="images\homepageimage.png"
          className="card-img"
          alt="background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">New Season</h5>
            <p className="card-text lead fs-2">Check Out All the Trends</p>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
