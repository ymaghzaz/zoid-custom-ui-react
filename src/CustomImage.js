import React, { Component } from "react";
import logo from "./logo.svg";
import { Router, Route, Switch } from "react-router-dom";
import LabelCore from "./LabelCore";

const style = {
  annotationContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  annotationActionContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "flex-end"
  },
  button: {
    width: "150px",
    height: "60px",
    margin: "2px 2px 2px 2px",
    borderRadius: "20px",
    fontSize: "large"
  }
};
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
      <div style={style.annotationContainer}>
        <div style={style.annotationActionContainer}>
          <h2> Custom UI v1 </h2>
          {labels && (
            <LabelCore labels={labels} annotationAction={annotationAction} />
          )}
          <div>
            {currentJob && (
              <img style={{ width: 400, height: 600 }} src={currentJob.url} />
            )}
          </div>
          <div>
            <button style={style.button} onClick={previousJob}>
              previousJob
            </button>
            <button style={style.button} onClick={skipJob}>
              skipJob
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomImage;
