import React from 'react'
import { Typography, AppBar, Toolbar } from '@mui/material'

export const Header = () => {
  return (
    <>
      <AppBar position="static">
  <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" component="div">
      TreeVention
    </Typography>
  </Toolbar>
</AppBar>
    </>
  )
}