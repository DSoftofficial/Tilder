import React, {useState} from 'react'
// import './css/MenuBar.css';

export default function MenuBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/web-app/tilder-web/src/imgs/Tilder-icon-header.png" alt="" srcset="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">File</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Edit</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">View</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Selection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Debug</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Shell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Navigate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Help</a>
              </li>
              
              
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link">Disabled</a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};
