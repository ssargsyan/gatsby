import React from "react"
import { HeaderContainer, HeaderText } from "./HeaderStyled"

export default function Header(props) {
  return (
    <HeaderContainer>
      <HeaderText>This is Header part of the {props.title} page</HeaderText>
    </HeaderContainer>
  )
}
