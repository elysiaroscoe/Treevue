import { Typography } from '@mui/material'
import React from 'react'

export const Widget = (props) => {
  const {data} = props;


  return (
    <>
      <Typography>{data?.suburb} Green Score : {data?.canopy}</Typography>
    </>
  )
}