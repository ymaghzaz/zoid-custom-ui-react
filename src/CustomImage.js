import React, { Component } from "react";
import logo from "./logo.svg";
import { Router, Route, Switch } from "react-router-dom";
import LabelCore from "./LabelCore";

class CustomImage extends Component {
  render() {
    const {
      currentJob,
      labels,
      annotationAction,
      previousJob,
      skipJob
    } = this.props;

    return (
      <div style={{ width: 800, height: "100%" }}>
        <div>
          <div> cutom ui v7 </div>
          <div style={{ width: 400, height: 600 }}>
            {currentJob && (
              <img style={{ width: 400, height: 600 }} src={currentJob.url} />
            )}
          </div>
          <div>
            <button onClick={previousJob}>previousJob</button>
            <button onClick={skipJob}>skipJob</button>
          </div>

          {labels && (
            <LabelCore labels={labels} annotationAction={annotationAction} />
          )}
          <pre>{JSON.stringify(currentJob, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default CustomImage;
