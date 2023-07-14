import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Image } from "antd";
export const BASE_URL = import.meta.env.BASE_URL
const path = `${BASE_URL}`;

export const locals = {
  en: [
    <>
      <Image
        style={{
          width: "20px",
          height: "20px",
          marginRight: "10px",
        }}
        src={`${path}united-kingdom.png`}
        preview={false}
      />
    </>,
    "ENG",
  ],
  vi: [
    <>
      <Image
        style={{
          width: "20px",
          height: "20px",
          marginRight: "10px",
        }}
        src={`${path}vietnam.png`}
        preview={false}
      />
    </>,
    "VI",
  ],
};
const resources = {
  en: {
    translation: {
      chessboard: "Chessboard",
      caculator: "Caculator",
      pomodoro: "Pomodoro",
      quotes: "Quotes",
      search:"Search",
      home: "Home",
      hello:"HelloWorld",
      convert:"Convert"
    },
  },
  vi: {
    translation: {
      chessboard: "Cờ vua",
      caculator: "Máy tính",
      pomodoro: "Đồng hồ làm việc",
      quotes: "Châm ngôn",
      search:"Tìm kiếm",
      home: "Trang chủ",
      hello:"Xin chào!",
      convert:"Chuyển đổi"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});
