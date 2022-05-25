import { createContext } from 'react'

const VaccineContext = createContext({newVaccine:[
    {name:'Ragu',date:'12-july',vaccine:'Yes'},
    {name:'Rithvik',date:'',vaccine:'No'},
]})
export default VaccineContext;
