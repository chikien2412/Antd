import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Image } from "antd";
export const locals = {
  en: [
    <>
      <Image
        style={{
          width: "20px",
          height: "20px",
          marginRight: "10px",
        }}
        src="../public/united-kingdom.png"
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
        src="../public/vietnam.png"
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
      quote: "Quote",
      search:"Search",
      home: "Home"
    },
  },
  vi: {
    translation: {
      chessboard: "Cờ vua",
      caculator: "Máy tính",
      pomodoro: "Đồng hồ làm việc",
      quote: "Châm ngôn",
      search:"Tìm kiếm",
      home: "Trang chủ",
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