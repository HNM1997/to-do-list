import React, { Component } from "react";

export default class Content extends Component {
  render() {
    let { content } = this.props;
    return (
      <section className="pt-4">
        {/* Page Features*/}

        <div className="card bg-light border-0 h-100">
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
              <i className={content.i} />
            </div>
            <h2 className="fs-4 fw-bold">{content.title}</h2>
            <p className="mb-0">{content.content}</p>
          </div>
        </div>
      </section>
    );
  }
}
