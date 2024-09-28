'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Links } from '@/constants'
import { checkAuth, signOut } from '@/lib/appwrite'
import Loader from '@/components/Loader'
import Image from 'next/image'

export default function DashboardLayout({
  children
}) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const user = await checkAuth();
        if (!user) {
          router.push('/log-in');
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error verifying user:', error);
        router.push('/log-in');
      }
    };

    verifyUser();
  }, [router]);

  const handleSignOut = async () => {
    setIsLoggingOut(true);
    try {
      await signOut();
      router.push('/log-in')
    } catch (error) {
      console.error('Error during sign out:', error);
    } finally {
      setIsLoggingOut(false);
    }
  }

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen"><Loader/></div>;
  }

  return (
    <section className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md z-50">
        <div className='flex flex-col justify-between h-full'>
          <nav className="mt-5 px-2">
            {Links.map(({id, route, title, imageurl}) => (
              <Link key={id} href={route}>
                
                <Button 
                  variant={pathname === route ? 'secondary' : 'ghost'}
                  className="w-full flex justify-start items-center mb-2 gap-2"
                >
                  <Image src={imageurl} alt='icon' width={20} height={20}/>
                  <span> {title}</span>
                </Button>
              </Link>
            ))}
          </nav>
          <Button 
            className="m-2" 
            onClick={handleSignOut} 
            disabled={isLoggingOut}
          >
            {isLoggingOut ? 'Signing out...' : 'Sign out'}
          </Button>
        </div>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto z-50">
        {children}
      </main>
    </section>
  )
}