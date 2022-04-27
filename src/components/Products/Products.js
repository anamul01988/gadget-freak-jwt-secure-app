import React from "react";
import { useState, useEffect } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <h2>Total products: {products.length}.</h2>
      <div className="row">
      {products.map((pd) => (
        <div className="col-4 g-3" key={pd._id}>
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">{pd.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">price: {pd.price}</h6>
             
              <button className="btn btn-link" href="#" class="card-link">
                 Order Now
              </button>
             
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Products;
