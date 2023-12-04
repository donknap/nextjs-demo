'use client'
import { Calendar, Card, Space } from '@arco-design/web-react'
import React from 'react'

export default function IndexLeft() {
  return (
    <div>
      <Space direction="vertical">
        <Card title="myCard">
          myCardmyCardmyCardmyCardmyCard
          <br></br>
          myCardmyCardmyCard
        </Card>
        <Calendar
          panel
          defaultValue='2020-04-01'
          panelTodayBtn
          onChange={(a) => console.log(a)}
          panelWidth={"100%"}
        />
      </Space>

    </div>
  )
}
