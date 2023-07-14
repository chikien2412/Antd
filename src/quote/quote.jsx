import React, { useState } from "react";
import { Card, Space, Input, Button, Modal } from "antd";

function Quote() {
  const [quoteData, setQuoteData] = useState(null);
  const [inputNumber, setInputNumber] = useState(0);
  const [token, setToken] = useState(null);
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Gửi yêu cầu POST đến endpoint "/authenticate" để lấy token
      const authResponse = await fetch("http://localhost:3000/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "kien", password: "2412" }),
      });
      const authData = await authResponse.json();
      const { token } = authData;
      setToken(token);

      // Gửi yêu cầu POST đến endpoint "/quotes" để lấy danh sách quotes
      const quoteResponse = await fetch("http://localhost:3000/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        body: JSON.stringify({ num: inputNumber }),
      });
      if (quoteResponse.ok) {
        const quoteData = await quoteResponse.json();
        setQuoteData(quoteData);
      } else {
        throw new Error("Server không phản hồi");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorModalVisible(true);
    }
  };

  const handleChange = (e) => {
    setInputNumber(e.target.value);
  };

  const handleModalClose = () => {
    setErrorModalVisible(false);
  };

  return (
    <>
      <br />
      <Space>
        <Input
          placeholder="Nhập số"
          onChange={handleChange}
          value={inputNumber}
        />
        <Button type="primary" onClick={handleFormSubmit}>
          Click
        </Button>
      </Space>
      <br />

      {quoteData && (
        <Space>
          {quoteData.map((quote) => (
            <Card key={quote.id} title={quote.author} bordered={false}>
              {quote.quote}
            </Card>
          ))}
        </Space>
      )}

      <Modal
        title="Lỗi"
        visible={errorModalVisible}
        onCancel={handleModalClose}
        onOk={handleModalClose}
      >
        Không thể kết nối tới server. Vui lòng kiểm tra lại kết nối.
      </Modal>
    </>
  );
}

export default Quote;
