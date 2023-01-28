import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <div className="wrapper">
        <nav
          className="main-header navbar navbar-expand-lg navbar-dark navbar-dark border-0 p-3"
          style={{ marginLeft: "unset", background: "transparent" }}
        >
          <div className="container">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                <span className="brand-text font-weight-light">
                  Ethereum Blockchain
                </span>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                {/* <ul className='navbar-nav me-auto mb-2 mb-lg-0 w-100'>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                </ul> */}
                <span className="navbar-text w-100">
                  <button style={{ background: "rgba(255,255,255,0.2)", borderRadius: "9px" }} className='float-right btn text-white'>
                    Connect Wallet 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png" width="30" alt="" />
                  </button>
                </span>
              </div>
            </div>  
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;