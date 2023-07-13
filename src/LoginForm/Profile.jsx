import { UserOutlined } from '@ant-design/icons';
import {Avatar, Typography, Space, Divider, Button} from 'antd'
import { useMemo } from 'react';
import jwtDecode from 'jwt-decode'
const {Text} = Typography;

// eslint-disable-next-line react/prop-types
function Profile({token, logOut}) {
    const profile = useMemo(() => jwtDecode(token), [token]);
    return <>
        <div style={{
            textAlign: 'center',
        }}>
            <Space direction="vertical" style={{width: '100%'}}>
                <Space>
                    <Avatar size={48} icon={<UserOutlined />} >{profile.username}</Avatar>
                    <Text >Pham Duy Hoang</Text>
                </Space>
                {/* <Text style={{ textAlign: 'center' }}>{profile.company}</Text> */}
                <Text style={{textAlign: 'center'}} strong>{profile.position}</Text>
            </Space>
            <Button type="link" onClick={logOut} >Logout</Button>
            <Divider style={{marginBottom: 0}} plain />
        </div>
    </>
}
export default Profile