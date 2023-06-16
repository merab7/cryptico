import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container bg-blue-950     fixed  left-0 top-0 bottom-0 p-5 pl-9 pr-9">
      <div className='flex flex-col gap-20 justify-between'>
        <div className='logo'>
          <Link to="/">
            <img src={logo} className='w-24' />
          </Link>
        </div>
        <Menu theme='dark' className='flex flex-col bg-gray-900  p-5 rounded-2xl'>
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to="" className="menu-item">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="cryptocurrencies" className="menu-item">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="exchanges" className="menu-item">Swap</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>}>
            <Link to="news" className="menu-item">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
