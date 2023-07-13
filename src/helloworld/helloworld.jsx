import { Button, Input, Space, Image } from "antd";
import { useState } from "react";

function Hello() {
  const [world, setWorld] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setWorld(inputValue);
  };

  return (
    <>
      <br />
      <Space direction="vertical">
        <Space>
          <label>Nhập tên và thấy điều kì diệu:</label>
        </Space>
        <Space style={{ marginLeft: "10px" }}>
          <Input onChange={handleInput} onPressEnter={handleClick}/>
          <Button type="primary" onClick={handleClick}>
            Xác nhận
          </Button>
        </Space>

        <Space style={{ marginLeft: "10px" }}>
          {world ? (
            <>
              <span>Tên của bạn là: {world}</span>
              <Image style={{ height: "200px" }} src="../public/cho-cuoi-deu.jpg" />
            </>
          ) : null}
        </Space>
      </Space>
    </>
  );
}

export default Hello;
