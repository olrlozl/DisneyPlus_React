import React from 'react'
import Banner from '../../components/Banner'
import Category from '../../components/Category'
import Nav from '../../components/Nav'
import Row from '../../components/Row'
import styled from 'styled-components'
import requests from '../../api/requests'

const MainPage = () => {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
    </Container>
  )
}

export default MainPage

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`