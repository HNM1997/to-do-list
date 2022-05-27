import React, { Component } from "react";
import Content from "./Content.jsx";
import Header from "./Header.jsx";

export default class Body extends Component {
  renderContent = () => {
    let { mangContent } = this.props;
    return mangContent.map((content, index) => {
      return (
        <div className="col-lg-6 col-xxl-4 mb-5">
          <Content content={content} key={index} />;
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="container px-lg-5">
          <div className="row gx-lg-5">{this.renderContent()};</div>
        </div>
      </div>
    );
  }
}
