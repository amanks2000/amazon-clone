import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="amazon-backgorund"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id={1}
            title="Echo Dot (4th Gen) | Smart speaker with Alexa | Glacier White"
            image="https://m.media-amazon.com/images/I/51mXq6pWMYL.jpg"
            price={6999.99}
            rating="⭐⭐⭐⭐"
          />
          <Product
            id={2}
            title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)"
            image="https://m.media-amazon.com/images/I/81Y5WuARqpS._SX679_.jpg"
            price={68390.55}
            rating="⭐⭐⭐⭐⭐"
          />
          <Product
            id={3}
            title="OnePlus 10 Pro 5G (Volcanic Black, 8GB RAM, 128GB Storage)"
            image="https://images-eu.ssl-images-amazon.com/images/I/41hbeJ-SaUL._SX300_SY300_QL70_FMwebp_.jpg"
            price={66999.81}
            rating="⭐⭐⭐⭐"
          />
        </div>
        <div className="home__row">
          <Product
            id={4}
            title="Do It Today: Overcome procrastination and achieve more meaningful things"
            image="https://images-na.ssl-images-amazon.com/images/I/41W-o6xu2bL._SX323_BO1,204,203,200_.jpg"
            price={191.37}
            rating="⭐⭐⭐⭐⭐"
          />
          <Product
            id={5}
            title="Sony WH-1000XM4 Wireless Noise Cancellation Bluetooth Headphones"
            image="https://images-eu.ssl-images-amazon.com/images/I/3199GnRGuML._SX300_SY300_QL70_FMwebp_.jpg"
            price={24990.99}
            rating="⭐⭐⭐⭐"
          />
          <Product
            id={6}
            title="Nike Men's Air Zoom Structure 21 Running Shoe"
            image="https://m.media-amazon.com/images/I/61n9lsvTyAL._UY695_.jpg"
            price={7011.49}
            rating="⭐⭐⭐⭐"
          />
          <Product
            id={7}
            title="Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-R840NZKAINS"
            image="https://m.media-amazon.com/images/I/61w674PbGRL._SX679_.jpg"
            price={15999.0}
            rating="⭐⭐⭐"
          />
        </div>
        <div className="home__row">
          <Product
            id={8}
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
            price={149990.99}
            rating="⭐⭐⭐⭐"
          />
          <Product
            id={9}
            title="The Cozy Couch - Presly Solid Wood U Shape Wide Suede Velvet Chesterfield Design Sofa & Chaise with Chrome Legs - (White)."
            image="https://m.media-amazon.com/images/I/81W6xcgpUjL._SX679_.jpg"
            price={61499.99}
            rating="⭐⭐⭐"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
