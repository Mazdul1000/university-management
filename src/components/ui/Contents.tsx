"use client"

import React from 'react';
import {  Layout } from 'antd';
import UMBreadCrumbs from './UMBreadCrumbs';
const { Content } = Layout;

const Contents = ({children}:{children:React.ReactNode}) => {

    const base = "admin"
    return (
        <Content style={{
            minHeight: "100vh",
            color:"black"
        }}>
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