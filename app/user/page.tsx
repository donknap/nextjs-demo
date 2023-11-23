import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
      <h1>User Login</h1>
      <Link href={"/user/login"}>登录</Link>
    </div>
  )
}
