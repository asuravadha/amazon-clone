import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71kYklU++VL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row"></div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
