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
            <form>
              <label>
                EMAIL<br/>
                <input type="text" className="email" name="email" placeholder="name@example.com"/>
              </label>
              <br/>
              <label>
                MESSAGE<br/>
                <textarea type="text" className="message" name="message" rows="5" placeholder="what's on your mind?"/>
              </label>
              <label>
                <input type="submit" className="submit" value="SUBMIT"/>
              </label>
            </form>
          </div>
        </div>
      </FadeIn>
    );
  }
}

export default Contact;