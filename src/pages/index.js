import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>My name is <strong>Ali Ahmed</strong></p>
    <p>and I live in Karachi, Pakistan</p>
    <p>Click below to learn why I should be invited to the hackathon</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
