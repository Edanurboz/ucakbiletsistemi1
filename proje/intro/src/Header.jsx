import React from "react";
import './css/Header.css';
import { Button, Flex, Tooltip } from "antd";
import { UserOutlined, LoginOutlined, GlobalOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
function Header() {
    const navigate = useNavigate();
    const handleIconClick2 = () => {
        navigate('/');
    };

    const handleIconClick = () => {
        navigate('/login');
    };
    const handleIconClick3 = () => {
        navigate('/');
    };
    return (
        <div className="header">
            <div className="icon">
                <Flex gap="large" wrap>
                    <Tooltip title="çıkış yap">
                        <Button  onClick={handleIconClick3} type="primary" shape="circle" icon={<LogoutOutlined />}></Button>
                    </Tooltip>
                    Çıkış Yap
                    <Tooltip title="ayarlar">
                        <Button type="primary" shape="circle" icon={<SettingOutlined />}></Button>
                    </Tooltip>
                    Ayarlar
                    <Tooltip title="kayıt ol">
                        <Button  onClick={handleIconClick2} type="primary" shape="circle" icon={<UserOutlined />} ></Button>
                    </Tooltip>
                    Kayıt ol
                    <Tooltip title="giriş yap">
                        <Button onClick={handleIconClick} type="primary" shape="circle" icon={<LoginOutlined />} Link to="/login"></Button>
                    </Tooltip>
                    Giriş Yapın
                    <Tooltip title="dil">
                        <Button type="primary" shape="circle" icon={<GlobalOutlined />}></Button>
                    </Tooltip>
                    Türkçe|TRY


                </Flex>
            </div>
        </div>
    )
}
export default Header;