export interface Item {
  name: string
  url: string
}

export interface Result {
  results: Item[]
  count: number
}

export async function getList(): Promise<Result> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  return response.json()
}