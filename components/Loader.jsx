import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='min-h-[300px] flex items-center justify-center'>
      <Image src='../images/loader.svg' alt='loader' width={40} height={40}/>
    </div>
  )
}

export default Loader
