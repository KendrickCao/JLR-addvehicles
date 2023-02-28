import * as React from 'react';
import Select from 'react-select'

export const SelectVehicles = (props) =>{
  
  const [selectedCode,setSelectedCode] = React.useState()
  const [selectedYears,setSelectedYears] = React.useState([])
  const [years, setYears] = React.useState()
  const [vehicles, setVehicles] = React.useState(props.initialVehicles)

  const handleModelChange = (event) => {
    setSelectedCode(event.code)
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

  const handleYearChange = (event) => {
      setSelectedYears(event)
  }
  console.log(selectedCode);
  console.log(selectedYears);

  
  return(
    <>
      <div className='select-container'>
        <span>Vehicle Model:</span>
        <div style={{width:'30%'}}>
          <Select options={vehicles} onChange={handleModelChange}/>
        </div>
        <span>Model Years:</span>
        <div style={{width:'50%'}}>
          <Select options={years} isMulti onChange={handleYearChange}/>
        </div>
      </div>
      <hr></hr>
    </>
  )
}