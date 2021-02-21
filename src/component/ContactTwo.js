import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
import SectionTitleTwo from "../component/Banner/SectionTitleTwo";
import Form from "./Form";
class ContactTwo extends Component {
  render() {
    return (
      <section className="contact-area contact-area-two bg_color" id="contacts">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="get_info">
                <SectionTitleTwo
                  stitle="Get in Touch"
                  btitle="Talk or Meet with Me"
                />
                <div className="media get_item">
                  <i className="flaticon-phone"></i>
                  <div className="media-body">
                    <h6>Call Me Now</h6>
                    <a href=".#">02934567845</a>
                  </div>
                </div>
                <div className="media get_item">
                  <i className="flaticon-chat"></i>
                  <div className="media-body">
                    <h6>Contact Me</h6>
                    <a href=".#">john@gmail.com</a>
                  </div>
                </div>
                <div className="media get_item">
                  <i className="flaticon-pin"></i>
                  <div className="media-body">
                    <h6>Get Me Here</h6>
                    <p>Z105 - London, UK</p>
                  </div>
                </div>
                <div className="media get_item">
                  <i className="flaticon-sound"></i>
                  <div className="media-body">
                    <h6>Listen To Me</h6>
                    <a href=".#">john.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <Reveal effect="fadeInRight" duration={800}>
                <div className="input_form">
                  <SectionTitleTwo
                    stitle="Contact us"
                    btitle="Let me know here Know Here"
                  />
                  <Form />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactTwo;
