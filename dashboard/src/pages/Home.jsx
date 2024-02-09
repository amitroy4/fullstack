import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Home = () => {
    const items = [
        getItem('Users', 'sub1', <MailOutlined />, [
          getItem('Merchant', '1'),
          getItem('Users', '2'),
        ]),
        getItem('Product', 'sub2', <AppstoreOutlined />, [
          getItem('Category', 'sub3', null, [getItem('Add Category', '3'),getItem('View Category', '4')]),
          getItem('SubCategory', 'sub4', null, [getItem('Add SubCategory', '5'),getItem('View SubCategory', '6')]),
          getItem('Product', 'sub5', null, [getItem('Add Product', '7'), getItem('View Product', '8')]),
        ]),
        getItem('Discount', 'sub6', <SettingOutlined />, [
          getItem('Add Discount', '9'),
          getItem('View Discount', '10'),
        ]),
      ];
      const rootSubmenuKeys = ['sub1', 'sub2', 'sub6']; 
      const [openKeys, setOpenKeys] = useState(['sub1']);
      const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          setOpenKeys(keys);
        } else {
          setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
      };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={items}
    />
  )
}

export default Home