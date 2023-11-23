import Link from 'next/link'
import React from 'react'

interface Item {
  id: number
  name: string
}

export default function ItemImage(props: Item) {
  return (
    <>
      <div>
        <Link href={`/pokemon/detail/${props.id}`}>
          <img src={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
            width={"150"} height={"150"}></img>
        </Link>
        <p>{props.name}</p>
      </div>
    </>
  )
}
