'use client'
import { Menu } from '@arco-design/web-react'
import Link from 'next/link'
import React from 'react'

const routes = [
  {
    name: "首页",
    path: "/"
  },
  {
    name: "列表",
    path: "/list"
  },
  {
    name: "皮卡丘",
    path: "/pokemon"
  },
  {
    name: "关于我们",
    path: "/about"
  },
  {
    name: "帮助",
    path: "/help"
  }
]

export default function MainNav() {
  return (
    <>
      <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['1']}>
        {routes.map((value, key) => {
          return <Menu.Item key={`${key}`}><Link href={value.path}>{value.name}</Link></Menu.Item>
        })}
      </Menu>
    </>
  )
}
