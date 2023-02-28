import * as React from 'react';

export const AddQualifier = ({ children }) =>{
  const [copies, setCopies] = React.useState([children]);
  const handleCopyClick = () => {
    const newCopies = [...copies]
    newCopies.push(React.cloneElement(children))
    setCopies(newCopies)
  }
  return (
    <div>      
      {copies.map((copy, index) => (
        <div key={index}>{copy}</div>      ))}
      <div className="add-qualifier-btn">
        <button onClick={handleCopyClick}>+ Add More Vehicle Qualifier</button>    
      </div>
    </div>  
  )
}