import './App.css';
import * as React from 'react';
import { vehiclesData } from './vehicleData';
import { AddQualifier } from './AddQualifier';
import { SelectVehicles } from './SelectVehicles';
import { Submit } from './Submit';

function App() {
  const[qualifiers,setQualifiers] =  React.useState([])

  const initialVehicles = vehiclesData.map(vehicle=>({
    label:vehicle.name,
    value:vehicle.name,
    ...vehicle
  }))
  
  const getQualifier = (qualifier) =>{
    setQualifiers([...qualifiers,qualifier])
  }

  return (
    <div className="App">
      <AddQualifier>
        <SelectVehicles initialVehicles={initialVehicles} getQualifier={getQualifier}/>
      </AddQualifier>
      <Submit qualifiers={qualifiers}/>
    </div>
  );
}

export default App;
