import React from 'react'
import {Typography} from '@mui/material'

export const Info = () => {
  return (
    <>
    <Typography>Overall Impact of Tree Canopy Score</Typography>
    <div style={{display: "flex", flexDirection: "column"}}>

    <div>
    <Typography>Air Quality</Typography>
    </div>
    <div>
    <Typography>Safety</Typography>
    </div>
    <div>
    <Typography>Temperature</Typography>
    </div>
    </div>
    </>
  )
}
