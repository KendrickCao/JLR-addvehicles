import * as React from 'react';

export const Submit = (props) =>{
    const submitQualifiers = (qualifiers)=>{
        console.log(qualifiers)
    }

    return(
        <div className="add-qualifier-btn">
            <button onClick={()=>submitQualifiers(props.qualifiers)}>Submit</button>
        </div>
    )
}