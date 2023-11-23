import React from 'react'

type Input = {
  params: {
    detail: number
  },
  searchParams: {

  }
}

export default function Page(input: Input) {
  return (
    <div>Page params is : {input.params.detail}</div>
  )
}
