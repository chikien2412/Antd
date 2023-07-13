import { Input, Space ,Typography,Button} from "antd";
import { useState } from "react";
import {MailOutlined,KeyOutlined} from '@ant-design/icons'
const{Text,Title} = Typography;
const LoginForm=({onSubmit})=>{
    const [username,SetUsername] = useState("");
    const [password,SetPassword] = useState("");
    return(
        <>
        <div style={{
            padding : 32,
            display : 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
            <Title level={2}>Login</Title>
            <Space direction="vertical">
                <Space direction="vertical">
                    <div><Text>username</Text></div>
                    <Input prefix={<MailOutlined/>} type="text" value={username} onChange={(e)=>SetUsername(e.target.value)}/>
                </Space>
                <Space direction="vertical">
                    <div><Text>password</Text></div>
                        <Input prefix={<KeyOutlined />} type="password" value={password} onChange={(e) => SetPassword(e.target.value)} />
                </Space>
                <Space style={{display:'flex',justifyContent:'space-between'}}>
                    <Button  type="primary" onClick={ async ()=>{onSubmit(username,password)}}>Submit</Button>
                    <Button  onClick={()=>{ 
                        SetUsername("");
                        SetPassword("")}}>Resest</Button>
                </Space>
            </Space>
        </div>
        </>
    )
}
export default LoginForm


