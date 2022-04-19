import React from "react";
const HeaderComponent = () => {
  return (
    <header className="main-header">
      <div className="logo-links">
        <div className="logo">Logo</div>
        <div className="links">
          <a href="#" className="link l1">
            Link1
          </a>
          <a href="#" className="link">
            Link2
          </a>
          <a href="#" className="link">
            Link3
          </a>
          <a href="#" className="link">
            Link4
          </a>
          <a href="#" className="link">
            Link5
          </a>
          <a href="#" className="link">
            Link6
          </a>
        </div>
      </div>
      <header className="sub-header">
        <div className="intro">
          <h1>Intro</h1>
          <p>
            Some Introduction lines
            <br /> about the website or <br />
            company
          </p>
        </div>
        <div className="inside-project">
          <div className="slider">
            <div>Featured Project</div>
            <div>Slider</div>
          </div>
        </div>
      </header>
    </header>
  );
};
export default HeaderComponent;
