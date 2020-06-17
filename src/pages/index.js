import React from "react"
import { Link } from "gatsby"
import Header from "./Header"
import { LinkContainer } from "./HeaderStyled"

export default function Home() {
  return (
    <div>
      <Header title="Home" />
      <LinkContainer>
        <Link to="/posts/">See Posts</Link>
      </LinkContainer>
    </div>
  )
}
