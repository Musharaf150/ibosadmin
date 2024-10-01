"use client"


import Child from '@/components/Child';
import FetchUser from '@/components/FetchUser';
import React, { useState } from 'react'

const Parent = () => {
    const [data, setData] = useState('');

    const handleChildData = (childData) => {
        setData((prevData) => prevData === childData ? !prevData : childData);
    }

    return (
        <div className='w-full flex gap-4'>
            <FetchUser/>
            <section className='bg-white rounded-lg font-semibold px-4 py-4'>
                <h1>I am Parent Component...{data}</h1>
            <Child recieveData={handleChildData} />
            </section>
        </div>
    )
}

export default Parent
