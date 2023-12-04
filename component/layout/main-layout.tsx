'use client'
import { Layout } from '@arco-design/web-react'
import React, { ReactNode } from 'react'
import MainNav from './main-nav'

export default function MainLayout(props: {
  children: ReactNode
}) {
  return (
    <Layout style={{
      width: "800px",
      margin: "0 auto"
    }}>
      <Layout.Header>
        <MainNav></MainNav>
      </Layout.Header>
      <Layout.Content>
        {props.children}
      </Layout.Content>
    </Layout>
  )
}
