import { useState } from "react";
import { Card, Space, Input, Button } from "antd";

function Quote() {
  const [quoteData, setQuoteData] = useState(null);
  const [inputNumber, setInputNumber] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
        // Gửi yêu cầu POST đến endpoint "/authenticate" để lấy token
        const authResponse = await fetch('http://localhost:3000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: 'kien', password: '2412' }),
        });
        const authData = await authResponse.json();
        const { token } = authData;
        setToken(token);

        // Gửi yêu cầu POST đến endpoint "/quotes" để lấy danh sách quotes
        const quoteResponse = await fetch('http://localhost:3000/quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token,
            },
            body: JSON.stringify({ num: inputNumber }),
        });
        const quoteData = await quoteResponse.json();
        setQuoteData(quoteData);
    } catch (error) {
        console.error('Error:', error);
    }
};
    

 

  const handleChange = (e) => {
    setInputNumber(e.target.value);
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
    </>
  );
}

export default Quote;
