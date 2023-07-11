import { useState, useEffect } from "react";
import { Card, Space, Input, Button } from "antd";

function Quote() {
  const [quoteData, setQuoteData] = useState(null);
  const [inputNumber, setInputNumber] = useState(0);

  async function postQuote(data) {
    try {
      const response = await fetch("http://localhost:3000/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setQuoteData(result); // Lưu trữ dữ liệu phản hồi vào biến state
    } catch (error) {
      console.error("Error:", error);
    }
  }
    useEffect(() => {
    const data = { num: inputNumber };
    postQuote(data);
  }, [inputNumber]);

  const handleClick = async () => {
    const data = { num: inputNumber };
    await postQuote(data);
  };

  const handleChange = (e) => {
    setInputNumber(e.target.value);
  };

  if (quoteData === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <br />
      <Space>
        <Input
          placeholder="Nhập số"
          onChange={handleChange}
          value={inputNumber}
        />
        <Button type="primary" onClick={handleClick}>
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
    </>
  );
}

export default Quote;
