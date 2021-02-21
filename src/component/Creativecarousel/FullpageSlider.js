import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import NavbarThree from "../Navbar/NavbarThree";
import jhonData from "../jhonData";
import "./style.scss";

const FullpageSlider = (fullpageProps) => (
  <div className="scroll_page">
    <NavbarThree mainlogo="logo2.png" />
    <ReactFullpage
      {...fullpageProps}
      render={({ state, fullpageApi }) => {
        return (
          <React.Fragment>
            <SectionOne smallText="Photography" />
            <SectionTwo />
            <SectionThree />
            <SectionFour jhonData={jhonData} />
          </React.Fragment>
        );
      }}
    />
    <div
      className="section_bg"
      style={{
        background: "linear-gradient( 90deg, #f66962 0%, #f78232 100%)",
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
        zIndex: "-1",
      }}
    >
      <ul
        data-relative-input="true"
        className="list-unstyled memphis"
        id="scene"
      >
        <li>
          <img srcSet={require("../../image/new-page/line1.png")} alt="" />
        </li>
        <li>
          <img srcSet={require("../../image/new-page/line2.png")} alt="" />
        </li>
        <li>
          <img srcSet={require("../../image/new-page/line3.png")} alt="" />
        </li>
        <li>
          <img srcSet={require("../../image/new-page/topshape2.png")} alt="" />
        </li>
        <li>
          <img
            className="layer layer2"
            data-depth="0.2"
            srcSet={require("../../image/new-page/shape1.png")}
            alt=""
          />
        </li>
        <li>
          <img srcSet={require("../../image/new-page/shape2.png")} alt="" />
        </li>
        <li>
          <img
            srcSet={require("../../image/new-page/bottomshape.png")}
            alt=""
          />
        </li>
        <li>
          <img srcSet={require("../../image/new-page/arrow.png")} alt="" />
        </li>
        <li>
          <img srcSet={require("../../image/new-page/shape3.png")} alt="" />
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
);

export default FullpageSlider;
