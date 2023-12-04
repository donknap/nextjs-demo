import React from 'react'
import ItemImage from './item-image'
import { getList, Result } from './service'

export default async function Page() {
  const list = await new Promise<Result>((reslove, reject) => {
    setTimeout(() => {
      getList().then(res => {
        reslove(res)
        //reject("错误获取错误")
      })
    }, 3000)
  })

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {list.results.map((value, key) => {
          return <ItemImage key={key} id={key + 5} name={value.name}></ItemImage>
        })}
      </div>
    </>
  )
}
