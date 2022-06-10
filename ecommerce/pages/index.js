import React from 'react';

import { Product, FooterBanner, HeroBanner } from '../components';

const Home=() => {
  return (
    <div>
      <HeroBanner/>

      <div className="products-heading">
        <h2>Best selling products</h2>
        <p>Great variety of speakers</p>
      </div>

      <div className="products-container">
        { ['Product 1', 'Product 2'].map((product) => product) }
      </div>

      <FooterBanner/>
    </div>
  );
};

export default Home;