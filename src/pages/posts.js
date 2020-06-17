import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Header from "./Header"
import { LinkContainer, List, ListContent, ImgContainer, Container } from "./HeaderStyled"

export default function Posts() {
  const data = useStaticQuery(
    graphql`
      query PostsPageQuery {
        allPostsJson {
          edges {
            node {
              title
              slug
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <Header title="Posts" />
      <LinkContainer>
        <Link to="/">Home</Link>
      </LinkContainer>
      <ul>
        {data.allPostsJson.edges.map((nodeItem, index) => {
          const { title, description, image, slug } = nodeItem.node
          const { fluid } = image.childImageSharp
          return (
            <List key={slug}>
              {title}
              <Container>
                <ImgContainer>
                  <Img fluid={fluid} alt="Dog" />
                </ImgContainer>
                <ListContent
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </Container>
            </List>
          )
        })}
      </ul>
    </div>
  )
}
