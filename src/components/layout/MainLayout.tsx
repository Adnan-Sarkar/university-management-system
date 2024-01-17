import { Layout, Menu, MenuProps } from "antd";

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: 1,
    label: "Demo",
  },
  {
    key: 2,
    label: "Demo",
  },
  {
    key: 3,
    label: "Demo",
    children: [
      {
        key: 4,
        label: "Demo",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          className="demo-logo-vertical"
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "64px",
            borderBottom: "1px solid #999",
          }}
        >
          <h1>LOGO</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h1>The main content should go here</h1>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
