import React from 'react'
import Post from "./Post";

export default function PostList({posts}) {
  return (
      <div>
        {posts ? posts.map(post => (
          <Post post={post} key={post.id}/>
        )) : []}
      </div>
  )
}