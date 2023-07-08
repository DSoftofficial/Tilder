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
            <div className="dropdrown-navigation">
              <button className='dropdown-trigger-btn'>File</button>
              <div className="contents">
                <a href="/">New File</a><br/>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MenuBar;