import Loader from '@/components/Loader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getOnePost } from '@/constants'
import React from 'react'

const Post = async  ({params:{id}}) => {
    const post = await getOnePost(id);

    if(!post) return <Loader/>
  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Post Details</CardTitle>
          <CardDescription>Displaying post information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">User ID</h3>
              <p className="text-gray-600">{post.userId}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Post ID</h3>
              <p className="text-gray-600">{post.id}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Title</h3>
              <p className="text-gray-600">{post.title}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Body</h3>
              <p className="text-gray-600 whitespace-pre-line">{post.body}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Post
