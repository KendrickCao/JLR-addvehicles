import * as React from 'react';
import Select from 'react-select'
import { vehiclesData } from './vehicleData';

export const SelectVehicles = () =>{
  const initialVehicles = vehiclesData.map(vehicle=>({
    label:vehicle.name,
    value:vehicle.name,
    ...vehicle}))

  const [years, setYears] = React.useState()
  const [vehicles, setVehicles] = React.useState(initialVehicles)

  const handleModelChange = (event) => {

    vehicles.map((vehicle)=>{
      if(event.value === vehicle.name){
        setYears(
          vehicle.modelYears.map(year=>({
            label:year,
            value:year
          }))
        )
      }
      return true
    })
    console.log(event);
  }

  return(
    <>
      <div className='select-container'>
        <span>Vehicle Model:</span>
          <Select options={vehicles} onChange={handleModelChange}/>
        <span>Model Years:</span>
          <Select options={years} isMulti/>
      </div>
      <hr></hr>
    </>
  )
}