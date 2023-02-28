import * as React from 'react';
import Select from 'react-select'

export const SelectVehicles = (props) =>{

  const [selectedCode,setSelectedCode] = React.useState()
  const [selectedYears,setSelectedYears] = React.useState([])
  const [years, setYears] = React.useState()

  const addQualifier = () =>{
    const qualifier = ({code:selectedCode,year:selectedYears})
    return qualifier
  }
  
  React.useEffect(() => {
    props.getQualifier(addQualifier())
 })

  const handleModelChange = (event) => {
    setSelectedCode(event.code)
    props.initialVehicles.map((vehicle)=>{
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
  }

  const handleYearChange = (event) => {
        event.map((year)=>
          setSelectedYears([...selectedYears,year.value])
        )
  }
  
  return(
    <>
      <div className='select-container'>
        <span>Vehicle Model:</span>
        <div style={{width:'30%'}}>
          <Select options={props.initialVehicles} onChange={handleModelChange}/>
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