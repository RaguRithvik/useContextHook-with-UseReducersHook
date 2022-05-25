import  React,{useReducer, useContext} from "react";
import {VaccineFrom} from "./component/VaccineFrom"
import {VaccineList} from "./component/VaccineList"
import VaccineContext from "./context/VaccineContext.jsx"
import {VaccineReducer} from "./Reducers/VaccineReducer.jsx"

function App() {
  const intialState = useContext(VaccineContext);
  const [state, dispatch] = useReducer(VaccineReducer, intialState)
  return (
    <VaccineContext.Provider value={{state, dispatch}}>
      <h1>Vaccine Form</h1>
      <VaccineFrom />
      <h1>Vaccine List</h1>
      <VaccineList />
    </VaccineContext.Provider>

  );
}

export default App;
