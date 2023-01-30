import React from 'react'
import Post from "./Post/Post"
import {useSelector} from "react-redux"; // to acess the data from the state


const Posts = () => {
  const posts = useSelector((state) => state.posts)

  
  return (
    <div>
    <h3
    className='text-2xl font-semibold'
    >Posts</h3>
   
    <div>
      {posts.map((post)=> (
        <Post
        post = {post}
        >
        </Post>
        
      ))}
    </div>

    </div>
  )
}

export default Posts