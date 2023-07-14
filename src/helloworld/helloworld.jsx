import { Button, Input, Space, Image, Checkbox } from "antd";
import { useState } from "react";

function Hello() {
  const [world, setWorld] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [uppercase, setUppercase] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setWorld(inputValue);
  };
 
  const handleCheckboxChange = (e) => {
    setUppercase(e.target.checked);
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
          <Checkbox onChange={handleCheckboxChange}>In hoa</Checkbox>
        </Space>

        <Space style={{ marginLeft: "10px" }}>
          {world ? (
            <>
              <span>Tên của bạn là: {uppercase ? world.toUpperCase() :  world.toLowerCase()}</span>
              <Image style={{ height: "200px" }} src="../public/cho-cuoi-deu.jpg" />
            </>
          ) : null}
        </Space>
      </Space>
    </>
  );
}

export default Hello;

