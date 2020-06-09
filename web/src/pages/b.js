import React from 'react'
import {Link, graphql} from 'gatsby'
import format from 'date-fns/format'
import Img from '../components/Img'
import Layout from '../components/triangles/Layout'
import BlogPreview from '../components/BlogPreview'
import PostGrid, {PostGridItem} from '../components/Post.styled'
// import H from '../components/mdxComponents/Headings';
// import Pagination from '../components/Pagination';
// import { PostMetaTags } from '../components/MetaTags';
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query BlogPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          categories {
            title
            id
            description
          }
        }
      }
    }
  }
`
const Blog = function ({data, pageContext, path}) {
  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  console.log(postNodes)
  if (!data) return <p>Shooooot! No Post found!</p>
  return (
    <>
      <Layout>
        {postNodes && <BlogPreview posts={postNodes} />}
      </Layout>
    </>
  )
}

export default Blog
