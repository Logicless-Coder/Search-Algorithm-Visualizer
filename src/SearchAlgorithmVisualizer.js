import React, { Component, Fragment } from "react";
import Slider from "react-input-slider";
import "./SearchAlgorithmVisualizer.css";

class SearchAlgorithmVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayLength: 20,
      array: [],
      searchValue: 5,
      foundIndex: -1,
      hasAnimationEnded: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleLengthChange = (event) => {
    this.setState({
      arrayLength: event.target.value,
    });
  };

  generateArray = () => {
    var arr = [];
    for (let i = 0; i < this.state.arrayLength; i++) {
      var ele = Math.floor(Math.random() * 2 * this.state.arrayLength) + 1;
      arr.push(ele);
    }
    this.setState({
      array: arr,
    });
  };

  animationHasEnded = () => {
    this.setState({
      hasAnimationEnded: true,
    });
  };

  linearSearch = () => {
    var j = -1;
    let i = 0;
    while (i < this.state.arrayLength) {
      if (this.state.array[i] == this.state.searchValue) {
        j = i;
        break;
      }
      if (this.state.hasAnimationEnded) {
        i++;
      }
    }
    // for (let i = 0; i < this.state.arrayLength; i++) {
    //   if (this.state.array[i] == this.state.searchValue) {
    //     j = i;
    //     break;
    //   }
    // }

    this.setState({
      foundIndex: j,
    });
  };

  render() {
    return (
      <Fragment>
        <header>Search Algorithm Visualizer</header>
        <div className="main">
          <div className="left-side">
            <label>Length of Array</label>
            <br />
            <input
              value={this.state.arrayLength}
              id="array-length"
              onChange={this.handleLengthChange}
            />
            <Slider
              axis="x"
              xstep={1}
              xmin={4}
              xmax={40}
              x={this.state.arrayLength}
              styles={{
                track: {
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                  width: 200,
                  height: 16,
                },
                active: {
                  backgroundColor: "rgba(255, 0, 0, 1)",
                },
              }}
              onChange={({ x }) =>
                this.setState({ arrayLength: parseFloat(x.toFixed(2)) })
              }
            />
            <br />
            <button onClick={this.generateArray} id="generate-button">
              Generate a new Array
            </button>
          </div>

          <div className="right-side">
            <div className="array-display">
              {this.state.array.map((element) => (
                <p className="box" onAnimationEnd={this.animationHasEnded}>
                  {element}
                </p>
              ))}
            </div>
            <br />
            <br />
            <br />
            <div className="array-search">
              <input
                value={this.state.searchValue}
                onChange={this.handleChange}
              />
              <button onClick={this.linearSearch}>Search</button>
              <br />
              <label className="display-result">
                Element found at index : {this.state.foundIndex}
              </label>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchAlgorithmVisualizer;
