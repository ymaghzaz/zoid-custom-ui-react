import React, { Component } from "react";

const ImportWithZoid = (Custom, stream$, tag) => {
  console.log("ImportWithZoid");
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        streamSubscribed: false,
        currentJob: null
      };
    }

    componentWillMount() {
      stream$.subscribe(currentJob => {
        this.setState({ currentJob });
      });
    }

    handler = event => async data => {
      if (event) {
        event(data);
      } else {
        console.log("this function is didn't defined ");
      }
    };

    render() {
      const { labels, annotationAction, previousJob, skipJob } = this.props;
      const { currentJob } = this.state;
      console.log("Suspense Suspense Suspense");
      return (
        <Custom
          labels={labels}
          currentJob={currentJob}
          skipJob={() => this.handler(skipJob)()}
          previousJob={() => this.handler(previousJob)()}
          annotationAction={label => this.handler(annotationAction)(label)}
        />
      );
    }
  };
};

export default ImportWithZoid;
