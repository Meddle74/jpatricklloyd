import React, { Component } from "react";
import SplitText from "react-pose-text";
const charPoses = {};

class SectionOne extends Component {
  render() {
    return (
      <div className="section fp-section fp-tabble section_one">
        <div className="slider_container">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="slider_content">
                  <h6>
                    <span className="br"></span>
                    <SplitText charPoses={charPoses}>Photography</SplitText>
                  </h6>
                  <h2>
                    <SplitText charPoses={charPoses}>
                      Fruit Photography
                    </SplitText>
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
                    src={require("../../image/new-page/slider_img1.jpg")}
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

export default SectionOne;
