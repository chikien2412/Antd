// eslint-disable-next-line no-unused-vars
import React from "react";
import "./chess.css";
import { useState } from "react";
import {Row, Col} from'antd'
// import {
//   useParams,
// } from "react-router-dom"

function ChessBoard() {

  const [number, setboardSize] = useState(8);
  const [colorChan, setColorChan] = useState("#000000");
  const [colorLe, setColorLe] = useState("#ffffff");
  const [flip, setFlip] = useState(0);
  function handleChange(e) {
    setboardSize(e.target.value);
  }
  function handelSetColorChan(e) {
    setColorChan(e.target.value);
  }
  function handelSetColorLe(e) {
    setColorLe(e.target.value);
  }
  const renderChessBoard = () => {
    return Array.from({ length: number }).map((index, row) => (
      <Row key={row} >
        {Array.from({ length: number }).map((index, col) => {
          let cellColor;
          if (!flip) cellColor = (row + col) % 2 === 0 ? colorLe : colorChan;
          else cellColor = (row + col) % 2 === 1 ? colorLe : colorChan;
          return (
            <Col
              key={`${row}-${col}`}
              className="cell"
              style={{ backgroundColor: cellColor,border:"1px solid black" }}
            ></Col>
          );
        })}
      </Row>
    ));
  };
  return (
    <div className="chess-board">
      <label>Nhập số</label>
      <div className="input-chessboard">
        <input
          placeholder="Nhap so"
          value={number}
          onChange={handleChange}
        ></input>
      </div>
      <label>Màu chẵn</label>
      <div className="input-chessboard">
        <input
          type="color"
          value={colorChan}
          onChange={handelSetColorChan}
        ></input>
      </div>
      <label>Màu lẻ</label>
      <div className="input-chessboard">
        <input type="color" value={colorLe} onChange={handelSetColorLe}></input>
      </div>
      <div
        onClick={() => {
          let f = (flip + 1) % 2;
          console.log(f);
          setFlip(f);
        }}
      >
        
        {renderChessBoard()}
       
        
      </div>
    </div>
  );
}

export default ChessBoard;
