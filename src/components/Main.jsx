import React from 'react'
import { Card,Select,FormControl, InputLabel, MenuItem } from '@mui/material'
import { useState, useMemo } from 'react'
import { Widget } from './Widget'
import axios from "axios"


const optionsList = ["Bellevue","Bridle Trails",	"Northwest Bellevue",	"BelRed",	"Downtown",	"Crossroads",	"Northeast Bellevue",	"Lake Hills",	"Wilburton",	"West Bellevue",	"Woodridge",	"West Lake Sammamish",	"Eastgate",	"Factoria",	"Newport",	"Somerset",	"Cougar Mountain / Lakemont"]
export const Main = () => {
  
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(optionsList[0])
  const [queryData, setQueryData] = useState(undefined)

  
  const handleChange = (event) => {
    setSelectedNeighborhood(event.target.value)
    const data = async ()=> {
      const response = await axios.get(`https://treevention.up.railway.app/suburb_rating?suburb=${selectedNeighborhood}`)
      setQueryData(response)
    }
    data()
  }
  

  return (
    <>
      <Card variant="outlined">
        <FormControl fullWidth>
          <InputLabel id="neighborhoods-input">Neighborhoods</InputLabel>
            <Select
              value={selectedNeighborhood}
              label="Neighborhood"
              onChange= {handleChange}
              
            >
              {optionsList.map((neighborhood)=> {return <MenuItem style = {{height: "50px"}}key={neighborhood}value={neighborhood}>{neighborhood}</MenuItem> })}
            </Select>
        </FormControl>
      </Card>
      {queryData && <Widget data={queryData}/>}
    </>
  )
}