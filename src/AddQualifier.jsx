import * as React from 'react';

export const AddQualifier = ({ children }) =>{
  const [copies, setCopies] = React.useState([children]);
  const handleCopyClick = () => {
    // const serializedState = JSON.stringify(copies);
    // localStorage.setItem('state',copies);
    const newCopies = [...copies]
    newCopies.push(React.cloneElement(children))
    setCopies(newCopies)
  }
  return (
    <div>      
      {copies}
      <div className="add-qualifier-btn">
        <button onClick={handleCopyClick}>+ Add More Vehicle Qualifier</button>    
      </div>
    </div>  
  )
}