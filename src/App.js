import React, { Component } from 'react';
import Results from './Components/Results'
import Keypad from './Components/Keypad'
import './App.css';

class App extends Component {
  state = {
    result: ""
  }

      onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

      calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

  render() {
    return (
      <div>
      <h1>Calculator</h1>
      <Results result={this.state.result} />
      <Keypad onClick={this.onClick} />

      </div>
    );
  }
}

export default App;
