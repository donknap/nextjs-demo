import Page from '@/app/pokemon/detail/[id]/page'
import React from 'react'


export default function ModelPage() {
  console.log(arguments);

  return (
    <Page params={{ id: 3 }}></Page >
  )
}
