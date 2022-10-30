import React from 'react'
import {Typography} from '@mui/material'
import styled from "styled-components";


export const Info = () => {
  return (
    <>
    <Typography>Overall Impact of Tree Canopy Score</Typography>
    <Section>
    <Typography>Air Quality</Typography>
    </Section>
    <Section>
    <Typography>Safety</Typography>
    </Section>
    <Section>
    <Typography>Temperature</Typography>
    </Section>
    </>
  )
}
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
