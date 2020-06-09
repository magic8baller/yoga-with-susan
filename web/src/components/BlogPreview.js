import React from 'react'
import {SectionHeading} from './common'
import PostGrid from './Post.styled'
import PostPreviewCard from './PostPreviewCard'
export default ({posts}) => {
  if (!posts) return null
  console.log({posts})
  return (
    <div>
      <SectionHeading text='My Blog' />
      <PostGrid>
        {posts.map(post => <PostPreviewCard key={post.id} post={post} />
        )}
      </PostGrid>
    </div>
  )
}
