import React from "react";
import Footer from './Footer';
import Navbar from './Navbar';

function Content({ products }) {

  return (
    <div className="Content">
       <Navbar />
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="50" />
          
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Content;
