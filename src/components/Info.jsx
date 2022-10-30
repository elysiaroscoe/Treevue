import React from 'react'
import {Typography} from '@mui/material'
import styled from "styled-components";


export const Info = () => {
  return (
    <>
    <Typography>Overall Impact of Tree Canopy Score</Typography>
    <Section>
      <Icon>image</Icon>
      <Typography>Air Quality</Typography>
      <InfoSection>test</InfoSection>
    </Section>
    <Section>
      <Icon></Icon>
      <Typography>Safety</Typography>
      <InfoSection></InfoSection>
    </Section>
    <Section>
      <Icon></Icon>
      <Typography>Temperature</Typography>
      <InfoSection></InfoSection>
    </Section>
    </>
  )
}

// Styling
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const InfoSection = styled.p`
  width: 70%;
`
