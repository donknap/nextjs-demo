'use client'
import { Skeleton } from '@arco-design/web-react'
import React from 'react'

export default function Loading() {
  let i = 1
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
      {Array(15).fill(i++).map((key, value) => {
        return <Skeleton text={false}
          image={{
            shape: "square",
            style: {
              width: "150px",
              height: "150px"
            }
          }}
          animation
        >

        </Skeleton>
      })}
    </div>
  )
}
