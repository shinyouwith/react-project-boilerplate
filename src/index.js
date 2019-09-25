import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

class Hello extends React.Component {
  render() {
    return <h1>리액트로 쿵짝쿵짝 시작하기!</h1>;
  }
}

ReactDOM.render(<Hello />, document.getElementById("app"));
