import { Typography,Link, Card } from '@mui/material'
import React from 'react'

export const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "green",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export const Widget = (props) => {
  const {data} = props;


  return (
    <Card>

      <Typography>{data?.suburb}, WA EcoStreet Score : {data?.canopy}</Typography>
      <ProgressBar completed={data?.canopy}/>
      <Link href={""}>More About your Score</Link>
    </Card>
  )
}