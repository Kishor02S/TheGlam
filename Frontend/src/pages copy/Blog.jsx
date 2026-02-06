import React from 'react'
import { Container } from 'react-bootstrap'

const Blog = () => {
  return (
    <section className="section">
      <Container>
        <h2 className="section-title text-center">Blog</h2>
        <p className="text-center">
          Sample blog content goes here.  
          You can later convert this into cards or articles.
        </p>
      </Container>
    </section>
  )
}

export default Blog
