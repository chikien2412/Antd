import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  DownOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Image,
  Typography,
  Space,
  Button,
  Input,
  Avatar,
  Dropdown,
} from "antd";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ChessBoard from "./chessboard/ChessBoard";
import Pomodoro from "./pomodoro/pomodoro";
import Caculator from "./caculator/caculator";
import Quote from "./quote/quote";
import Hello from "./helloworld/helloworld";
import Convert from "./convert/convert";
import ChessSvg from "./logo/ChessSvg";
import CaculatorSvg from "./logo/Caculator";
import PomodoroSvg from "./logo/Pomodoro";
import QuoteSvg from "./logo/Quote";
import HomeSvg from "./logo/Hello";
import { useTranslation } from "react-i18next";
import { locals } from "./i18n/i18n";
import MoonSvg from "./logo/Moon";
import SunSvg from "./logo/Sun";
import Dowload from "../public/download.png"
import Spiderman from "../public/spider-man-comic-new-logo-322E9DE914-seeklogo.com.png"
import United from "../public/united-kingdom.png"
import Vietnam from "../public/vietnam.png"
import "./App.css";
// export const BASE_URL = import.meta.env.BASE_URL
// const path = `${BASE_URL}/`;
const { Text, Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

const item2s = [
  {
    icon: <HomeSvg />,
    label: <Link to="/hello"></Link>,
    key: "/hello",
  },
  {
    icon: <TransactionOutlined />,
    label: <Link to="/convert"></Link>,
    key: "/convert",
  },
  {
    icon: <ChessSvg />,
    label: <Link to="/chessboard"></Link>,
    key: "/chessboard",
  },
  {
    icon: <CaculatorSvg />,
    label: <Link to="/caculator"></Link>,
    key: "/caculator",
  },
  {
    icon: <PomodoroSvg />,
    label: <Link to="/pomodoro"></Link>,
    key: "/pomodoro",
  },
  {
    icon: <QuoteSvg />,
    label: <Link to="/quotes"></Link>,
    key: "/quotes",
  },
];

const App = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = locals[i18n.language];
  const [darkMode, setDarkMode] = useState(false);
  const [layoutBgColor, setLayoutBgColor] = useState("dark");
  const handleToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      setLayoutBgColor("light");
    } else {
      setLayoutBgColor("dark");
    }
  };
  const breadcrumbNameMap = {
    "/chessboard": t("chessboard"),
    "/caculator": t("caculator"),
    "/pomodoro": t("pomodoro"),
    "/quotes": t("quotes"),
    "/hello": t("hello"),
    "/convert": t("convert"),
  };
  const item1s = [
    {
      icon: <HomeSvg />,
      label: <Link to="/hello">{t("hello")}</Link>,
      key: "/hello",
    },
    {
      icon: <TransactionOutlined />,
      label: <Link to="/convert">{t("convert")}</Link>,
      key: "/convert",
    },
    {
      icon: <ChessSvg />,
      label: <Link to="/chessboard">{t("chessboard")}</Link>,
      key: "/chessboard",
    },
    {
      icon: <CaculatorSvg />,
      label: <Link to="/caculator">{t("caculator")}</Link>,
      key: "/caculator",
    },
    {
      icon: <PomodoroSvg />,
      label: <Link to="/pomodoro">{t("pomodoro")}</Link>,
      key: "/pomodoro",
    },
    {
      icon: <QuoteSvg />,
      label: <Link to="/quotes">{t("quotes")}</Link>,
      key: "/quotes",
    },
  ];

  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });

  const breadcrumbItems = [
    {
      title: <Link to="/">{t("home")}</Link>,
      key: "home",
    },
  ].concat(extraBreadcrumbItems);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };



  return (
    <div>
     
        <Layout>
          <Layout>
            <Sider
              width={200}
              style={{
                background: "##1F2937",
              }}
              theme={layoutBgColor}
              trigger={null}
              collapsible
              collapsed={collapsed}
            >
              <Header
                style={{ backgroundColor: "#1F2937", paddingInline: "20px" }}
              >
                <Space>
                  {!collapsed ? (
                    <Space>
                      <a href="/">
                        <Image
                          width="36px"
                          height="30.03px"
                          // src="../public/download.png"
                          src={Dowload}
                        
                          
                          preview={false}
                        ></Image>
                      </a>
                      <Title
                        style={{
                          fontSize: "20px",
                          marginBottom: "0",
                          color: "white",
                        }}
                        disable
                      >
                        LCK
                      </Title>
                    </Space>
                  ) : (
                    <Space>
                      <a href="/">
                        <Image
                          width="36px"
                          height="30.03px"
                          // src="../public/download.png"
                          src={Dowload}
                          preview={false}
                        ></Image>
                      </a>
                    </Space>
                  )}
                </Space>
              </Header>
              {!collapsed ? (
                <Space
                  direction="vertical"
                  style={{ borderBottom: "1px solid #888E9B", width: "100%" }}
                >
                  <Image
                    style={{
                      width: "80px",
                      marginLeft: "50px",
                      marginTop: "10px",
                    }}
                    src={Spiderman}
                    preview={false}
                  ></Image>
                  <Title
                    style={{
                      color: "#888E9B",
                      fontSize: "20px",
                      marginLeft: "25px",
                    }}
                  >
                    Lương Chí Kiên
                  </Title>
                </Space>
              ) : (
                <Space
                  direction="vertical"
                  style={{ borderBottom: "1px solid #888E9B", width: "100%" }}
                >
                  <Image
                    style={{
                      width: "40px",
                      marginLeft: "20px",
                      marginTop: "10px",
                      marginBottom: "5px",
                    }}
                    src={Spiderman}
                    preview={false}
                  ></Image>
                </Space>
              )}

              <Menu
                mode="inline"
                theme={layoutBgColor}
                defaultSelectedKeys={location.pathname}
                defaultOpenKeys={["sub1"]}
                style={{
                  // minHeight: "100vh",
                  borderRight: 0,
                  // backgroundColor: "#1F2937",
                }}
                items={!collapsed ? item1s : item2s}
              ></Menu>

              <Space style={{ marginTop: "450px", marginLeft: "28px" }}>
                {!collapsed ? (
                  <Button
                    style={{ width: "45px", marginLeft: "100px" }}
                    onClick={handleToggle}
                  >
                    {darkMode ? <MoonSvg /> : <SunSvg />}
                  </Button>
                ) : (
                  <Button style={{ width: "45px" }} onClick={handleToggle}>
                    {darkMode ? <MoonSvg /> : <SunSvg />}
                  </Button>
                )}
              </Space>
            </Sider>

            <Layout
              style={{
                padding: "0 24px 24px",
                minHeight: "100vh",
              }}
            >
              <Header
                style={{
                  padding: 0,
                  background: colorBgContainer,
                }}
              >
                <Space
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Space>
                    <Button
                      type="text"
                      icon={
                        collapsed ? (
                          <MenuUnfoldOutlined />
                        ) : (
                          <MenuFoldOutlined />
                        )
                      }
                      onClick={() => setCollapsed(!collapsed)}
                      style={{
                        fontSize: "16px",
                        width: 64,
                        height: 64,
                      }}
                    />
                    <Input
                      size="large"
                      placeholder={t("search")}
                      prefix={<SearchOutlined />}
                    />
                  </Space>
                  <Space>
                    <Space direction="vertical">
                      <Space wrap>
                        <Dropdown
                          overlay={
                            <Menu onClick={(e) => changeLanguage(e.key)}>
                              <Menu.Item key="en">
                                <Image
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    marginRight: "10px",
                                  }}
                                  src={United}
                                  preview={false}
                                />
                                ENG
                              </Menu.Item>
                              <Menu.Item key="vi">
                                <Image
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    marginRight: "10px",
                                  }}
                                  src={Vietnam}
                                  preview={false}
                                />
                                VIE
                              </Menu.Item>
                            </Menu>
                          }
                          placement="bottomLeft"
                        >
                          <Button>
                            {currentLanguage} <DownOutlined />
                          </Button>
                        </Dropdown>
                      </Space>
                    </Space>
                    <Avatar
                      style={{
                        marginRight: "10px",
                      }}
                      src={
                        <img
                          src={Spiderman}
                          alt="avatar"
                        />
                      }
                    />
                  </Space>
                </Space>
              </Header>

              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
                items={breadcrumbItems}
              >
                {" "}
              </Breadcrumb>
              <Content
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
              >
                <Space style={{ marginBottom: "20px" }}>
                  <Text
                    style={{
                      textTransform: "uppercase",
                      fontFamily: "Roboto Mono",
                    }}
                  >
                    {pathSnippets.map((snippet, index) => (
                      <span key={index}>{t(snippet)}</span>
                    ))}
                  </Text>
                </Space>
                <Switch>
                  <Route path="/chessboard">
                    <ChessBoard />
                  </Route>
                  <Route path="/caculator">
                    <Caculator />
                  </Route>
                  <Route path="/pomodoro">
                    <Pomodoro />
                  </Route>
                  <Route path="/quotes">
                    <Quote />
                  </Route>
                  <Route path="/hello">
                    <Hello />
                  </Route>
                  <Route path="/convert">
                    <Convert />
                  </Route>
                  Convert
                </Switch>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2023 Created by Chi Kien
              </Footer>
            </Layout>
          </Layout>
        </Layout>
     
    
   
    </div>
  );
};

export default App;
