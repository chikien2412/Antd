import "./cal.css";
import { useState } from "react";
import { Row, Col, Layout } from "antd";
function App() {
  const [state, setState] = useState("");

  function handleNumber(e) {
    const number = e.target.innerHTML;
    setState((prevValue) => prevValue + number);
  }
  function handleOperation(e) {
    const operation = e.target.innerHTML;
    if (operation === "=") {
      const result = eval(state.replace(/÷/g, "/").replace(/x/g, "*"));
      setState(result);
    } else {
      // Remove multiple consecutive operators and keep only the last one
      const operators = ["+", "-", "x", "÷"];
      const lastChar = state.slice(-1);
      if (operators.includes(lastChar) && operators.includes(operation)) {
        setState((prevValue) => prevValue.slice(0, -1) + operation);
      } else {
        setState((prevValue) => prevValue + operation);
      }
    }
  }

  function handleDel() {
    setState("");
  }
  const deleteOneCharacter = () => {
    setState(state.slice(0, -1));
  };
  return (
    <>
      <div className="App">
        <div className="cal">
          <div className="content-calculator">{state}</div>
          <Layout>
            <Row>
              <Col
                className="clear-container"
                align="center"
                onClick={handleDel}
              >
                Clear
              </Col>
              <Col
                className="clear-container"
                align="center"
                onClick={deleteOneCharacter}
              >
                Del
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleOperation}
              >
                =
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleOperation}
              >
                +
              </Col>
            </Row>
            <Row>
              <Col
                className="num-container"
                align="center"
                onClick={handleNumber}
              >
                7
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleNumber}
              >
                8
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleNumber}
              >
                9
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleOperation}
              >
                -
              </Col>
            </Row>
            <Row>
              <Col
                className="num-container"
                align="center"
                onClick={handleNumber}
              >
                4
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleNumber}
              >
                5
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleNumber}
              >
                6
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleOperation}
              >
                x
              </Col>
            </Row>
            <Row>
              <Col
                className="num-container"
                align="center"
                onClick={handleNumber}
              >
                1
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleNumber}
              >
                2
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleNumber}
              >
                3
              </Col>
              <Col
                className="num-container"
                align="center"
                onClick={handleOperation}
              >
                /
              </Col>
            </Row>
          </Layout>
        </div>
      </div>
    </>
  );
}

export default App;
