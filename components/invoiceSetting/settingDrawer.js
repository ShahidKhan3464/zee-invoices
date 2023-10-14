import React from 'react';
import { Drawer } from 'antd';
// import InvoiceSetting from './index'

const Index = ({ children, settingDrawer, setSettingDrawer }) => {

    const onClose = () => {
        setSettingDrawer(false)
    }

    return (
        <Drawer title="Invoice Settings" placement="right" onClose={onClose} open={settingDrawer}>
            {children}
        </Drawer>
    )
}

export default Index