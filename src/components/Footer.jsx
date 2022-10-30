import { Link, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return (
    <>
      <Typography>Collaborators: Theresa Benkman, Khong Lor, E. Roscoe, Teressa Sung, Steven Wing</Typography>
      <Typography>Created at HackSEA 2022 with <Link href={"https://www.hackathonsinternational.com/"}>Hackathons International</Link></Typography>
      <Link href={"https://railway.app/"}>Thank you to Railway for hosting this project</Link>
    </>
  )
}