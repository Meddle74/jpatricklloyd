import React, { Component } from "react";
import SplitText from "react-pose-text";
import "./style.scss";

const charPoses = {};

class SectionTwo extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content slider_content_two">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Developer</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Martin Solonick Independent
                    </SplitText>
                  </h2>
                  <h2 className="bold">
                    <SplitText charPoses={charPoses}>Frelencer</SplitText>
                  </h2>
                  <p>
                    Start using our easy-to-use tools with multiple options to
                    improve.
                  </p>
                  <a href="#/" className="see_btn" data-text="See Projects">
                    See Projects
                    <span className="arrow">
                      <span className="line"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="slider_image_inner">
                  <span></span>
                  <img
                    src={require("../../image/new-page/slider_img2.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTwo;
