import { Button, Input, Space } from "antd";
import { useState } from "react";

import ConvertSvg from "../logo/Convert";
import "./convert.css";

function Hello() {
  const [vndValue, setVndValue] = useState("");
  const [dolaValue, setDolaValue] = useState("");

  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
    setVndValue(vndValue);
    setDolaValue(dolaValue);
  };

  const handleVndInput = (e) => {
    const money = e.target.value;
    setVndValue(money);
    setDolaValue(money / 24000);
  };

  const handleDolaInput = (e) => {
    const money = e.target.value;
    setDolaValue(money);
    setVndValue(money * 24000);
  };

  return (
    <>
      <br />
      <Space direction="vertical">
        <Space>
          <label>Nhập số tiền:</label>
        </Space>
        {!click ? (
          <Space style={{ marginLeft: "10px" }}>
            <label>Dola:</label>
            <Input
              onChange={handleDolaInput}
              value={dolaValue}
              type="number" 
            />
            <Button style={{ borderRadius: "60%" }} onClick={handleClick}>
              <ConvertSvg />
            </Button>
            <label>VND:</label>
            <Input value={vndValue} type="number" disabled /> 
          </Space>
        ) : (
          <Space style={{ marginLeft: "10px" }}>
            <label>VND:</label>
            <Input
              onChange={handleVndInput}
              value={vndValue}
              type="number" 
            />
            <Button style={{ borderRadius: "60%" }} onClick={handleClick}>
              <ConvertSvg />
            </Button>
            <label>Dola:</label>
            <Input value={dolaValue} type="number" disabled /> 
          </Space>
        )}
      </Space>
    </>
  );
}

export default Hello;
