import React from 'react'
import { Card,Select,FormControl, InputLabel, MenuItem } from '@mui/material'
import { useState } from 'react'
import { Widget } from './Widget'
import {Info} from './Info'
import axios from "axios"


const optionsList = ["Bellevue","Bridle Trails",	"Northwest Bellevue",	"BelRed",	"Downtown",	"Crossroads",	"Northeast Bellevue",	"Lake Hills",	"Wilburton",	"West Bellevue",	"Woodridge",	"West Lake Sammamish",	"Eastgate",	"Factoria",	"Newport",	"Somerset",	"Cougar Mountain / Lakemont"]
export const Main = () => {
  
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("Bellevue")
  const [queryData, setQueryData] = useState(undefined)

  const data = async (eventValue)=> {
    return await axios.get(`https://treevention.up.railway.app/suburb_rating?suburb=${eventValue}`)}
  
  const handleChange = async (event) => {
    setSelectedNeighborhood(event.target.value)
    const response = await data(event.target.value)
    console.log(response.data)
    setQueryData(response.data)
    }

  return (
    <>
      <Card variant="outlined" style={{margin: "25px", padding: "25px"}}>
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
      {queryData && <Widget data={queryData}/>}
      </Card>
      <Info />
    </>
  )
}