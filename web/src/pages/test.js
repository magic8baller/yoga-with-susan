import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout/ScrollLayout'
import useSiteMetadata from '../hooks/use-siteMetadata'
import Landing from '../components/triangles/About'



const TestPage = () => {

  const {title, description, keywords} = useSiteMetadata()

  return (
    <Layout siteTitle={title}>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
      />
      {/* <Nav /> */}
     <Landing />
    </Layout>
  )
}

export default TestPage
