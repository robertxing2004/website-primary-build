import React from "react";

import "../css/Contact.css";
import FadeIn from 'react-fade-in';

class Contact extends React.Component {
  render() {
    return(
      <FadeIn>
        <div className="contact" id="contact">
          <div className="contact-title">
            <h2>| contact</h2>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default Contact;