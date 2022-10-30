import React from 'react'
import { Card,Select,FormControl, InputLabel, MenuItem } from '@mui/material'
import { useState, useMemo } from 'react'
import { Widget } from './Widget'


export const Main = () => {
  const data = useMemo(()=> {
    return [{name: "Bellevue", score: 77}, {name: "BelRed", score: 80}]
    }, []);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("Bellevue")
  
  const neighborhoodData = useMemo(()=> {
    return data.filter((neighborhood)=> neighborhood.name === selectedNeighborhood)
  }, [selectedNeighborhood, data])


  return (
    <>
      <Card variant="outlined">
        <FormControl fullWidth>
          <InputLabel id="neighborhoods-input">Neighborhoods</InputLabel>
            <Select
              value={selectedNeighborhood}
              label="Neighborhood"
              
            >
              {data && data.map((neighborhood)=> {return <MenuItem value={neighborhood.name} onClick={(event)=>setSelectedNeighborhood(event.target.value)}>{neighborhood.name}</MenuItem> })}
            </Select>
        </FormControl>
      </Card>
      {neighborhoodData && <Widget data={neighborhoodData}/>}
    </>
  )
}