import React from 'react';

const Home=() => {
  return (
    <>
      HeroBanner

      <div>
        <h2>Best selling products</h2>
        <p>Great variety of speakers</p>
      </div>

      <div>
        {['Product 1','Product 2'].map((product) => product)}
      </div>

      Footer
    </>
  );
};

export default Home;