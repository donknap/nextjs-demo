import React from 'react'
import ItemImage from './item-image'

interface Item {
  name: string
  url: string
}

interface Result {
  results: Item[]
  count: number
}

async function getList(): Promise<Result> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  return response.json()
}

export default async function Page() {
  const list = await getList()
  console.log(list);

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
