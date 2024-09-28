'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from 'next/link'
import { checkAuth, createUser } from '@/lib/appwrite'
import { useEffect, useState } from 'react'



export default function Register() {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const authenticate = async () => {
      const user = await checkAuth();
      if (user) {
        router.push('/dashboard');
      }
    };

    authenticate();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.username || !form.email || !form.password) {
      alert('Error Please fill in all the fields')
    }
    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);

      router.push('/log-in')

    } catch (error) {
      alert(error.message)
    } finally {
      setIsSubmitting(false)
    }

  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[350px]  bg-white z-50">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="username"
                  placeholder="Enter your name"
                  value={form.username}
                  onChange={(e) => setForm({
                    ...form,
                    username: e.target.value
                  })}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({
                    ...form,
                    email: e.target.value
                  })}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Choose a password"
                  value={form.password}
                  onChange={(e) => setForm({
                    ...form,
                    password: e.target.value
                  })}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="mt-4 w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Registering...' : 'Register'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <p>Already have account?
            <Link href="/log-in"><span className='px-1 font-semibold'>Log in</span></Link>
          </p>

        </CardFooter>
      </Card>

      
    </div>
  )
}
