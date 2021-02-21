import React from "react";
import FullpageSlider from "./component/Creativecarousel/FullpageSlider";
import fullpageOptions from "./component/Creativecarousel/fullpageConfig";

export const Creativecarousel = () => (
  <React.Fragment>
    <FullpageSlider
      // isFooterOpen={this.state.isFooterOpen}
      // hide={this.hide}
      // show={this.show}
      {...fullpageOptions}
    />
  </React.Fragment>
);
