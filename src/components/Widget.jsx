import { Typography } from '@mui/material'
import React from 'react'

export const Widget = (props) => {
  const {data} = props;


  return (
    <>

    <Typography>{data?.name} Green Score : {data?.score}</Typography>

    </>
  )
}