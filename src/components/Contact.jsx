import React from 'react';

import "../css/Contact.css";
import emailjs from '@emailjs/browser';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuccessLabel: false,
      showContentLabel: false,
      showFailLabel: false
    };
    this.contactForm = React.createRef();
  }

  sendEmail = (e) => {
      e.preventDefault();

      const form = e.target;

      if(form.message.value !== "" && form.from_name.value !== "") {
        emailjs
        .sendForm('service_vtrcas9', 'template_n84xhni', form, {
          publicKey: '7kGqqG1D-QTYZgxor',
          from_name: form.from_name.value,
          message: form.message.value,
          to_name: 'Robert'
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.reset();
            this.setState({ showSuccessLabel: true });
            setTimeout(() => {
              this.setState({ showSuccessLabel: false });
            }, 5000);
          },
          (error) => {
            console.log('FAILED...', error.text);
            form.reset();
            this.setState({ showFailLabel: true });
            setTimeout(() => {
              this.setState({ showFailLabel: false });
            }, 5000);
          },
        );
      }
      else {
        console.log('ERROR!');
        this.setState({ showContentLabel: true });
        setTimeout(() => {
          this.setState({ showContentLabel: false });
        }, 5000);
      }
  };


  render() {
    return(
      <div className="contact" id="contact">
        <div className="contact-title">
          <h2>| contact</h2>
          <form onSubmit={this.sendEmail}>
            <label>
              EMAIL<br/>
              <input type="text" className="email" name="from_name" placeholder="name@example.com"/>
            </label>
            <br/>
            <label>
              MESSAGE<br/>
              <textarea type="text" className="message" name="message" rows="5" placeholder="what's on your mind?"/>
            </label>
            <br/>
            <label>
              <input type="submit" className="submit" value="SUBMIT"/>
              {this.state.showSuccessLabel && <span className="label">Thanks for reaching out! I'll get back to you ASAP</span>}
              {this.state.showContentLabel && <span className="label">Something feels missing...</span>}
              {this.state.showFailLabel && <span className="label">Well that's awkward, I don't work at the moment...</span>}
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;