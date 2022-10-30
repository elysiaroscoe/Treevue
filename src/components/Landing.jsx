import React from 'react'
import { Header } from './Header'
import {Footer} from "./Footer"
import {Main} from "./Main"
import styled from 'styled-components'

export const Landing = () => {
  return (
    <PageLayout>
        <Header/>
        <Main />
        <Footer />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 0;
`
