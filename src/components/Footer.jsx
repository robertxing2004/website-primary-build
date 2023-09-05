import React from "react";

import "../css/Footer.css";
import FadeIn from 'react-fade-in';

class Footer extends React.Component {
  render() {
    return (
      <FadeIn>
        <div id="footer">
            <div className="footer-content">
              <p>designed and built by Robert Xing<br/>
              all rights reserved. &copy; {(new Date().getFullYear())}</p>
            </div>
        </div>
      </FadeIn>
    );
  }
}

export default Footer;