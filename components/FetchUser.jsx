"use client"


import React, { useEffect, useState } from 'react'
import ReusableCard from './ReusbaleCard'
import Loader from './Loader';
import { getUser } from '@/lib/appwrite';

const FetchUser = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getUser();
                setUser(res)
                console.log("Response:", res)
            } catch (error) {
                console.log("Error Fetching User" + error.message)
            }

        }
        fetchUser();
    }, [])

  return (
    <>
    {!user ? <Loader />
                :
               
    <ReusableCard title={user.name} value={user.email}/>
            }
    </>
  )
}

export default FetchUser
