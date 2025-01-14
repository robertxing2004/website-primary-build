import React from "react";

import "../css/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="footer-content">
          <p>designed and built by Robert Xing<br/>
          all rights reserved. &copy; {(new Date().getFullYear())}</p>
        </div>
      </div>
    );
  }
}

export default Footer;