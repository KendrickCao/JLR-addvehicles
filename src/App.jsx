import './App.css';
import { vehiclesData } from './vehicleData';
import { AddQualifier } from './AddQualifier';
import { SelectVehicles } from './SelectVehicles';

function App() {
  const initialVehicles = vehiclesData.map(vehicle=>({
    label:vehicle.name,
    value:vehicle.name,
    ...vehicle
  }))
  
  return (
    <div className="App">
      <AddQualifier>
        <SelectVehicles initialVehicles={initialVehicles}/>
      </AddQualifier>
    </div>
  );
}

export default App;
