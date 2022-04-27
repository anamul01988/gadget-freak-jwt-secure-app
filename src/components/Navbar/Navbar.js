import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Gadget Freak
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/uploadPd">
                  Upload Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/orders">
                  Order List
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
           
              <span className="navbar-text">
                 {
                     user? <span>{user.displayName}
                     <button onClick = {()=>signOut(auth)} className="btn btn-link">Sign Out</button>
                     </span> : 'USER'
                 }
              </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
