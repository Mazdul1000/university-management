"use client"

import React from 'react';
import {  Layout } from 'antd';
import UMBreadCrumbs from './UMBreadCrumbs';
import Header from './Header';
const { Content } = Layout;

const Contents = ({children}:{children:React.ReactNode}) => {

    const base = "admin"
    return (
        <Content style={{
            minHeight: "100vh",
            color:"black"
        }}>
            <Header />
            <UMBreadCrumbs items={[
                {
                    label: `${base}`,
                    link: `/${base}`
                },
                {
                    label: "students",
                    link: `/${base}/student`
                }
            ]}/>
            {children}
        </Content>
    );
};

export default Contents;