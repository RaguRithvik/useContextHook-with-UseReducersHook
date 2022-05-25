export const VaccineReducer = (state, action) =>{
  switch (action.type) {
    case "ADD_VACCINE":
      const updateMember = [...state.newVaccine, action.payload];
      return{
          ...state, newVaccine:updateMember
    }
    // break;
    case "DELETE_VACCINE":
      const deletedMember = state.newVaccine.filter(mem =>mem.name !== action.payload.name);
      return{...state, newVaccine:deletedMember}
    // break;
    default:
      return state;
  }
  } 