import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function Layout(props: {
  children: ReactNode,
  model: ReactNode,
}) {
  return (
    <>
      <div>{props.model}</div>
      <div>{props.children}</div>
    </>
  )
}
