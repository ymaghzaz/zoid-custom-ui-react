import React, { Component } from "react";
import logo from "./logo.svg";

window.MyLoginZoidComponent = window.zoid.create({
  tag: "fastag-custom-component-image-v1",
  url: window.zoid.getCurrentScriptDir(),
  autoResize: { width: true, height: true }
});
class App extends Component {
  state = {
    streamSubscribed: false,
    currentJob: null
  };
  componentWillMount() {
    const { currentJob } = this.props;
    this.setState({ currentJob });
  }

  handler = event => async data => {
    const { currentJob } = this.state;
    if (currentJob) {
      this.setState({ currentJob: null });
      const currentJobPromise = await event(data);
      // const currentJob = await currentJobPromise();
      console.log("currentJob", currentJobPromise);
      this.setState({ currentJob: currentJobPromise });
      console.log("dssssd", data);
    }
  };

  render() {
    let login = () => {};

    const { labels, annotationAction, previousJob, skipJob } = this.props;
    if (window.stream) {
      if (!this.state.streamSubscribed) {
        window.stream.subscribe(job => {
          console.log("job", job);
          this.setState({ currentJob: job, streamSubscribed: true });
        });
      }
    } else {
      console.log("stream not defined");
    }

    console.log("stt()");
    const { currentJob } = this.state;
    console.log("currentJob.url", currentJob && currentJob.url);
    return (
      <div style={{ width: 800, height: "100%" }}>
        <div>
          <div> cutom ui v3 </div>
          <div style={{ width: 400, height: 600 }}>
            {currentJob && (
              <img style={{ width: 400, height: 600 }} src={currentJob.url} />
            )}
          </div>
          <div>
            <button
              onClick={() => {
                this.handler(annotationAction)("hello");
              }}
            >
              data wiki
            </button>
            <button
              onClick={() => {
                console.log("previousJob");
                this.handler(previousJob)("hello");
              }}
            >
              previousJob
            </button>
            <button
              onClick={() => {
                this.handler(skipJob)("hello");
              }}
            >
              skipJob
            </button>
          </div>
          <pre>{JSON.stringify(this.state.currentJob, null, 2)}</pre>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>

        <div>
          <svg
            id="spinner"
            className="spinner"
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="path"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              cx="33"
              cy="33"
              r="30"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
