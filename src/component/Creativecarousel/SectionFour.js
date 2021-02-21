import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
import Form from "../Form";
import "./style.scss";

class SectionFour extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <div className="section fp-section fp-tabble section_one contact-area">
        <div className="slider_container">
          <div className="container">
            <div className="row row-reverse">
              {jhonData.contact &&
                jhonData.contact.map((item) => {
                  return (
                    <React.Fragment key={item.id}>
                      <div className="col-md-5">
                        <Reveal effect="fadeInLeft" duration={500}>
                          <div className="contact_info">
                            <h4>{item.title}</h4>
                            <ul className="nav">
                              {item.menuItems.map((info) => {
                                return (
                                  <li className="item" key={info.id}>
                                    <div className="media">
                                      <a href="/#">
                                        <i className={info.icon}></i>
                                      </a>
                                      <div className="media-body">
                                        <a href="/#">{info.text}</a>
                                      </div>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </Reveal>
                      </div>
                    </React.Fragment>
                  );
                })}
              <div className="col-md-7">
                <Reveal effect="fadeInRight" duration={800}>
                  <div className="input_form">
                    <h4>{jhonData.contacttitle}</h4>
                    <Form />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFour;
