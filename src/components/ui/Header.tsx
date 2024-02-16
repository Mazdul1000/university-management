import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";
import { IUserInfo } from "@/types";

const { Header: AntHeader } = Layout;


const Header = () => {
  const router = useRouter();
  const { role } = getUserInfo() as IUserInfo;

  const logout = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logout} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <AntHeader style={{ background: "#fff" }}>
      <Row justify="end" align="middle" style={{ height: "100%" }}>    
        <p>{role}</p>
        <Dropdown menu={{ items }}>
    
          <Space wrap size={16}>          
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
