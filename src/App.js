import React, { Component } from "react";
import ImportWithZoid from "./ImportWithZoid";
import CustomImage from "./CustomImage";
import { from, interval, of } from "rxjs";
import { flatMap } from "rxjs/operators";

window.customComponent = window.zoid.create({
  tag: "custom-component-image-v1"
});

class App extends Component {
  componentWillMount() {
    this.getStreamData();
  }
  getStreamData = () => {
    const { stream } = this.props;
    if (stream) {
      return interval(500).pipe(flatMap(() => from(this.props.stream())));
    } else {
      return of({
        filename: "datasets/img/sidebar-3.jpg",
        jobID: "0Ksj5Ep7Ea6p44+num2PMmRqyfw=",
        idName: "1",
        jobActionType: "ANNOTATION",
        url:
          "https://www.frenchweb.fr/wp-content/uploads/2018/08/IA-shutterstock_678583375-650x405.jpg"
      });
    }
  };

  render() {
    const CustomComponent = ImportWithZoid(
      CustomImage,
      this.getStreamData(),
      "fastag-custom-component-image-v1"
    );
    return <CustomComponent {...this.props} />;
  }
}

export default App;
