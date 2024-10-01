import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPosts } from '@/constants';
import Link from 'next/link';


const Posts = async () => {
    const posts = await getPosts();


  return (
    <div className=" ">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/dashboard/events/${post.id}`}> 
          <Card key={post.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold line-clamp-1">{post.title.substring(0,30)}...</CardTitle>
              <CardDescription>Post ID: {post.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.body.substring(0, 100)}...</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Badge variant="secondary">User {post.userId}</Badge>
            </CardFooter>
          </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Posts
