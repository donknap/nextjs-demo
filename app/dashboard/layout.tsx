import Link from 'next/link'
import React, { ReactNode } from 'react'

export default function Layout(props: {
  children: ReactNode,
  message: ReactNode,
  total: ReactNode,
}) {
  return (
    <>
      <div>{props.children}</div>
      <Link className='mt-10' href={"/dashboard/detail"}>查看详情</Link>
      <div className=' flex mt-5'>
        <div className='flex-1 border border-solid border-red-200 p-5'>
          {props.message}
        </div>
        <div className='flex-1 border border-solid border-red-200 p-5'>
          {props.total}
        </div>
      </div>
    </>
  )
}
