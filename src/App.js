import React, { Component } from "react";
import ImportWithZoid from "./ImportWithZoid";
import CustomImage from "./CustomImage";
import { from, interval, of } from "rxjs";
import { flatMap } from "rxjs/operators";

window.fastagCustomComponent = window.zoid.create({
  tag: "fastag-custom-component-image-v1"
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
        DatesetType: "CUSTOM_ANNOTATION",
        workgroupID: "image-custom-ui_v1",
        idName: "1",
        receiptHandle:
          "AQEB6PAdUcf8hRBARNUh5jrnsza5oj74ugjPfEcbfaF4+0+5qEIj1S2CYnVg6cgbTFMOpL0101jG36vk1sdcOYAyAhO/tKrFaxxaO8nLhHKunbgJ2mU22VIkaPciJvgNM2biqIazrjKhcv+WnYW32tsYJxf0uIc7R/UyPOScYm2Gvd3pdnkBhlzwC19WSaIIfAws5zaDIkJsWpKXPYpbxGYxun9HkblRvDIt+m6TGpqWGpKqxQYIjP5PDkHKJRvrXwX/04DArvn+MCoyeAK+siXveVu8Q9QUSDBtV5z65gYkYeuL/sl4QejE2gI/lfhlVs/VuEInpWQzFKEN23KL5lA1qf141muePrWA+w6c6m4pvRb18EnVijPoyPYijqcDffAfjJMJp+GqpXmhDS7m39NWGxBCPIDAWUAcyhmczNa3hZubH/T68IKtfEJaPGCOtoKA",
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
