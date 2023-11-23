import React, { ReactNode } from 'react'

export default function Layout(props: {
  children: ReactNode,
  auth: ReactNode,
}) {
  return (
    <>
      <div>{props.children}</div>
      <div>{props.auth}</div>
    </>
  )
}
