import React, { Component } from "react";

const ImportWithZoid = (Custom, stream$, tag) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        streamSubscribed: false,
        currentJob: null,
        labels: null
      };
    }

    componentWillMount() {
      stream$.subscribe(currentJob => {
        this.setState({ currentJob });
      });
    }

    componentDidMount() {
      let { labels } = this.props;
      if (!labels) {
        labels = [
          {
            name: "person",
            id: 1
          },
          {
            name: "organization",
            id: 2
          }
        ];
      }
      this.setState({ labels });
    }
    handler = event => async data => {
      if (event) {
        event(data);
      } else {
        console.log("this function is didn't defined ");
      }
    };

    render() {
      const { annotationAction, previousJob, skipJob } = this.props;
      const { labels, currentJob } = this.state;
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
