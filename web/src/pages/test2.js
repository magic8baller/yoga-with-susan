import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/triangles/Layout'
import useSiteMetadata from '../hooks/use-siteMetadata'
import Intro from '../components/triangles/Intro'
import About from '../components/triangles/About'

const TestPage = () => {
  const {title, description, keywords} = useSiteMetadata()

  return (
    <Layout title={title}>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
      />
      <Intro />
      <About />
    </Layout>
  )
}

export default TestPage
