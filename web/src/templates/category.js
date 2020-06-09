import React from 'react'
import {Link, graphql} from 'gatsby'
// import div from '../components/div'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../components/triangles/Layout'
import {getBlogUrl} from '../lib/helpers'
export const query = graphql`
  query CategoryTemplateQuery($id: String!) {
    category: sanityCategory(id: {eq: $id}) {
      title
      description
      posts {
        _id
        title
        publishedAt
        slug {
          current
        }
      }
    }
  }
`
const CategoryPostTemplate = props => {
  const {data = {}, errors} = props
  // Destructure the new posts property from props
  const {title, description, posts} = data.category || {}

  return (
    <Layout>
      <div>
        {errors && <GraphQLErrorList errors={errors} />}
        {!data.category && <p>No category data</p>}
        <SEO title={title} description={description} />
        <article>
          <h1>Category: {title}</h1>
          <p>{description}</p>
          {/*
            If there are any posts, add the heading,
            with the list of links to the posts
          */}
          {posts && (
            <React.Fragment>
              <h2>Posts</h2>
              <ul>
                { posts.map(post => (
                  <li key={post._id}>
                    <Link to={getBlogUrl(post.publishedAt, post.slug)}>{post.title}</Link>
                  </li>))
                }
              </ul>
            </React.Fragment>)
          }
        </article>
      </div>
    </Layout>
  )
}

export default CategoryPostTemplate