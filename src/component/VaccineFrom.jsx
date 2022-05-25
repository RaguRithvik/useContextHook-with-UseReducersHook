import React,{useState, useContext} from "react";
import VaccineContext from "../context/VaccineContext"
const intialvalue = {name:'',date:'',vaccine:''}
export const VaccineFrom = () => {
    const {dispatch} = useContext(VaccineContext)

    const [vaccineForm, setVaccineForm] = useState(intialvalue)

    const handleFormChange = (e) =>{
      setVaccineForm({...vaccineForm, [e.target.name]:e.target.value})
    } 
    const handleFormSubmit = (e) =>{
      e.preventDefault()
      dispatch({type:"ADD_VACCINE", payload:vaccineForm})
      // setVaccineForm(intialvalue)
    }
  return (
    <div>
      <form onSubmit={(e) =>{handleFormSubmit(e)}}>
        <input onChange={(e)=>{handleFormChange(e)}} type="text" name="name" placeholder="Name of candidate" /> <br /><br />
        <input onChange={(e)=>{handleFormChange(e)}} type="date" name="date" placeholder="Vaccine Date" /> <br /><br />
        <input onChange={(e)=>{handleFormChange(e)}} type="text" name="vaccine" placeholder="Vaccine" />
        <button>Submit</button>
      </form>
    </div>
  )
}
