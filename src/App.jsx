import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Image,
  Typography,
  Space,
  ConfigProvider,
  Button,
  Input,
  Avatar,
  Dropdown,
} from "antd";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import ChessBoard from "./chessboard/ChessBoard";
import Pomodoro from "./pomodoro/pomodoro";
import Caculator from "./caculator/caculator";
import Quote from "./quote/quote";
import "./App.css";
import ChessSvg from "./logo/ChessSvg";
import CaculatorSvg from "./logo/Caculator";
import PomodoroSvg from "./logo/Pomodoro";
import QuoteSvg from "./logo/Quote";
import { useTranslation } from "react-i18next";
import { locals } from "./i18n/i18n";
const { Text, Title } = Typography;

const { Header, Content, Sider, Footer } = Layout;

const item2s = [
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
    label: <Link to="/quote"></Link>,
    key: "/quote",
  },
];


const Home = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = locals[i18n.language];
  const breadcrumbNameMap = {
    "/chessboard": t("chessboard"),
    "/caculator": t("caculator"),
    "/pomodoro": t("pomodoro"),
    "/quote": t("quote"),
  };
  const item1s = [
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
      label: <Link to="/quote">{t("quote")}</Link>,
      key: "/quote",
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
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          <Sider
            width={200}
            style={{
              background: "##1F2937",
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <Header
              style={{ backgroundColor: "#1F2937", paddingInline: "30px" }}
            >
              <Space>
                {!collapsed ? (
                  <Space>
                    <a href="/">
                      <Image
                        width="36px"
                        height="30.03px"
                        src="../public/download.png"
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
                        src="../public/download.png"
                        preview={false}
                      ></Image>
                    </a>
                  </Space>
                )}
              </Space>
            </Header>
            <Menu
              mode="inline"
              theme="dark"
              defaultSelectedKeys={location.pathname}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
                backgroundColor: "#1F2937",
              }}
              items={!collapsed ? item1s : item2s}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
              minHeight: "90vh",
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
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
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
                                src="../public/united-kingdom.png"
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
                                src="../public/vietnam.png"
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
                        src="../public/spider-man-comic-new-logo-322E9DE914-seeklogo.com.png"
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
                    <span key={index}>
                      {t(snippet)}
                    </span>
                  ))}
                </Text>
              </Space>
              <Routes>
                <Route path="/chessboard" element={<ChessBoard />}></Route>
                <Route path="/caculator" element={<Caculator />}></Route>
                <Route path="/pomodoro" element={<Pomodoro />}></Route>
                <Route path="/quote" element={<Quote />}></Route>
              </Routes>
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
const App = () => (
  <BrowserRouter>
    <ConfigProvider>
      <Home />
    </ConfigProvider>
  </BrowserRouter>
);
export default App;
