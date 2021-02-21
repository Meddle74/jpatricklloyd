import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";

class Contact extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <section className="contact-area" id="contact">
        <div className="container">
          <div className="row row-reverse">
            {jhonData.contact &&
              jhonData.contact.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <div className="col-md-12">
                      <Reveal effect="fadeInLeft" duration={1000}>
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
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
