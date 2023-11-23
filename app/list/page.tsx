import Link from 'next/link'
import React from 'react'

type MyListItem = {
  title: string,
  id: number,
  desc: string,
}

export default function Page() {

  const list = [
    { title: "这是第1111标题", id: 1, desc: "这是第一个描述" },
    { title: "这是第2222标题", id: 2, desc: "这是第一个描述" },
    { title: "这是第3333标题", id: 3, desc: "这是第一个描述" },
  ] as MyListItem[]

  return (
    <>
      <div>List page</div>
      <ul className='list'>
        {list.map((value, key) => (
          <li key={value.id}><Link href={'/list/' + value.id}>{value.title}</Link></li>
        ))}
      </ul>
    </>

  )
}

