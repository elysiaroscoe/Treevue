import React from 'react'
import mockAPI from "./mockAPI.json"

export const Widget = () => {

  return (
    <div>{JSON.stringify(mockAPI)}</div>
  )
}