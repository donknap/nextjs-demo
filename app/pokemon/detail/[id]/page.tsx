import React from 'react'

interface Props {
  params: {
    id: number
  }
}

export default async function Page(props: Props) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.params.id}/`)
  const data = await response.json()

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Height: {data.height} CM</p>
    </div>
  )
}
