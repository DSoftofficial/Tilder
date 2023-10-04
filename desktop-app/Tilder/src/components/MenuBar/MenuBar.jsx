import React from 'react'

function MenuBar() {
  return (
    <>
      <header>
        <nav>
          <div id="header_icon">
            <img src="/Tilder_icon.png" alt="tilder_icon_header" aria-label='Tilder' />
          </div>
          <div className="navigation">
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>File</span>
              </div>
              <div className="dropdown-content">
                <a href="#">New File</a><br />
                <a href="#">New Folder</a><br />
                <a href="#">New Window</a><br />
                <a href="#">New Tab</a><br />
                <hr className='dropdowncontent-hr' />
                <a href="#">Open File</a><br />
                <a href="#">Open Folder</a><br />
                <a href="#">Open Recent</a><br />

              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>Edit</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>View</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>Go</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>Run</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>Debug</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>Print</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>Shell</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>Keys</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
            <div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MenuBar;