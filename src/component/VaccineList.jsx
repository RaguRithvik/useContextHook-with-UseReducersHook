import React, { useContext} from 'react';
import VaccineContext from '../context/VaccineContext'

export const VaccineList = () => {
  const {state, dispatch} = useContext(VaccineContext);//from app context provider value
console.log(state)
  return (
    <div>
        {state.newVaccine.map((data, index)=>(
         <div key={index}>
            <p style={{display:"inline-block",marginLeft:"100px"}}>Name: {data.name} | </p>
            <p style={{display:"inline-block",marginLeft:"100px"}}>Date: {data.date} | </p>
            <p style={{display:"inline-block",marginLeft:"100px"}}>Vaccine: {data.vaccine} | </p>
            <button onClick={()=>{dispatch({type:"DELETE_VACCINE", payload:data})}} style={{display:"inline-block",marginLeft:"100px"}}>Delete</button>
        </div>
      ))}
    </div>
  )
}
