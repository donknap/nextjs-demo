import IndexLeft from '@/component/index/left'
import IndexMain from '@/component/index/main'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' grid grid-cols-5 gap-2 mt-2'>
      <div className=' col-span-2'>
        <IndexLeft></IndexLeft>
      </div>
      <div className=' col-span-3'>
        <IndexMain></IndexMain>
      </div>
    </div>
  )
}
