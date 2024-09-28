import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center z-10 px-5">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-black">
          Welcome to the Admin Panel
        </h1>
        <p className="text-xl md:text-2xl text-black">
          Manage your task with ease
        </p>
        <div className="space-x-4">
          <Link href="/log-in">
            <Button size="lg" className="cursor-pointer">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button size="lg"  className="cursor-pointer">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
