import Modal from '@/component/modal'
import React from 'react'

export default function Page() {
  return (
    <>
      <Modal>
        <div className=' border border-red-500 border-solid h-20 w-20'>
          登录：
          用户名：
          密码：
        </div>
      </Modal>
    </>
  )
}
