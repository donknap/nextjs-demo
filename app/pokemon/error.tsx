'use client'
import { Button, Result } from '@arco-design/web-react'
import Error from 'next/error';
import React from 'react'

export default function ErrorPage(props: {
  error: Error
}) {

  return (
    <Result
      status='error'
      title='Error message'
      subTitle={props.error.message}
      extra={[
        <Button key='again' style={{ margin: '0 16px' }}>
          Again
        </Button>,
        <Button key='back' type='primary'>
          Back
        </Button>,
      ]}
    ></Result>
  )
}
