import { Link, Typography } from '@mui/material'
import React from 'react'
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterStyles>
      <Typography>Collaborators: Theresa Benkman, Khong Lor, E. Roscoe, Teressa Sung, Steven Wing</Typography>
      <Typography>Created at HackSEA 2022 with <Link href={"https://www.hackathonsinternational.com/"}>Hackathons International</Link></Typography>
      <Link href={"https://railway.app/"}>Thank you to Railway for hosting this project</Link>
    </FooterStyles>
  )
}

// Styling
const FooterStyles = styled.div`
  padding: 15px;
  background: grey;
  align-items: center;
  `