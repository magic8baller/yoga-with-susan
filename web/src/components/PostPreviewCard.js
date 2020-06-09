import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import {PostGridItem} from './Post.styled'
import PortableText from './portableText'
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'
import {format} from 'date-fns'
import styled from '@emotion/styled'

const PostPreviewCard = ({post: {title, _rawExcerpt, publishedAt, mainImage, categories, slug, id}}) => {
  console.log(categories)
  return (
    <PostGridItem key={id}>
      {mainImage && mainImage.asset && (
        <div>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />

          <div className='postMeta'>
            <time dateTime={publishedAt}>
              {format(
                new Date(publishedAt),
                'MMMM d, yyyy'
              )}
            </time>
            <ul className='categories'>
              {categories.map((cat, idx) => (
                <li key={`cat-${cat.id}`}>{cat.title}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {_rawExcerpt && (
        <div>
          <PortableText blocks={_rawExcerpt} />
        </div>
      )}
      <div>{format(publishedAt, 'MMMM Do, YYYY')}</div>
    </PostGridItem>
  )
}
const CardWrapper = styled.article`
  
`
export default PostPreviewCard
