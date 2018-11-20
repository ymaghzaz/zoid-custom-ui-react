import React, { Component } from "react";
import _ from "lodash";
import { hotkeys } from "react-keyboard-shortcuts";

const style = {
  annotationContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  annotationActionContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "flex-end"
  },
  buttonAnnotationAction: color => ({
    width: "150px",
    height: "60px",
    margin: "2px 2px 2px 2px",
    borderRadius: "4px",
    backgroundColor: color,
    color: "white",
    fontSize: "large"
  })
};

const getAnnotationColorButton = () => {
  return [
    "#A901DB",
    "#5882FA",
    "#0080FF",
    "#7401DF",
    "#58FA82",
    "#FA58F4",
    "#D0F5A9",
    "#088A85",
    "#5882FA",
    "#F781F3",
    "#00FFBF",
    "#7401DF",
    "#58FA82",
    "#FA58F4",
    "#D0F5A9"
  ];
};

class LabelButton extends React.PureComponent {
  hot_keys = {};

  gethotKey(key, outputType) {
    key = parseInt(key);
    key++;
    if (key < 10) {
      if (outputType === "HOT_KEYS") {
        return `alt+${key}`;
      }
      return key;
    } else {
      let new_key = key - 10;
      const codeAsciiOf_a = "a".charCodeAt(0);
      new_key = String.fromCharCode(new_key + codeAsciiOf_a);
      if (outputType === "HOT_KEYS") {
        return `alt+${new_key}`;
      }
      return new_key;
    }
  }

  setHotKey() {
    const { labels, annotationAction } = this.props;
    labels.map((label, key) => {
      this.hot_keys[this.gethotKey(key, "HOT_KEYS")] = {
        priority: 1,
        handler: event => {
          annotationAction(label, key);
        }
      };
    });
  }

  render() {
    const { labels, annotationAction, selectedLabel } = this.props;
    const colors = getAnnotationColorButton();
    this.setHotKey();
    return (
      <div>
        <div style={style.annotationActionContainer}>
          {labels.map((label, key) => (
            <button
              key={key}
              style={style.buttonAnnotationAction(colors[key])}
              onClick={() => annotationAction(label, key)}
            >
              {/* <p style={style.buttonText}> */}
              {label.name} ({this.gethotKey(key, "KEYS")}){/* </p> */}
            </button>
          ))}
        </div>

        {/* <p> * Raccourcis clavier : </p>
        <p> Pc__: (1)=> alt+1 </p>
        <p> ____: (a) => alt+1 </p>
        <p> Mac_: (1) => option+1 </p>
        <p> ____: (a) => option+a </p> */}
      </div>
    );
  }
}

export default hotkeys(LabelButton);
