import React from "react";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleOrder = (product) =>{
    const {name, price} = product;
    //  console.log(product, user.email)
    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      body: JSON.stringify({
           name,
           price,
           email: user.email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) =>{
          console.log(json)
        
      });
  }
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
             
              <button onClick={()=>handleOrder(pd)} className="btn btn-link" href="#" class="card-link">
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
