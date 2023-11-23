'use client'
import React, { ReactNode } from 'react'

export default function ListLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <div>{children}</div>
    </>
  )
}
