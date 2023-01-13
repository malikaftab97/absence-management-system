import { absenceConstants } from "../actions/constants"

const intiState = {
    absences: [],
    absence_types: []
}

export default (state = intiState, action) => {
// console.log(action);
    switch(action.type){
        case `${absenceConstants.SHOW_LOADER}_REQUEST`:
            return { ...state, loading: true };
        case `${absenceConstants.HIDE_LOADER}_REQUEST`:
          return { ...state, loading: false };
        case `${absenceConstants.GET_ABSENCES}_REQUEST`:
          break;
        case `${absenceConstants.GET_ABSENCES}_SUCCESS`:
          state = {
              ...state,
              absences: action.payload.absences
          }
          break;
          case `${absenceConstants.GET_ABSENCES}_FAILURE`:
              state = {
                  ...state,
                  absences: action.payload.groups
              }
          break;
          case `${absenceConstants.GET_ABSENCE_TYPES}_REQUEST`:
            break;
          case `${absenceConstants.GET_ABSENCE_TYPES}_SUCCESS`:  
          state = {
            ...state,
            absence_types: action.payload.absences
          }
          break;
          case `${absenceConstants.GET_ABSENCE_TYPES}_FAILURE`:  
          state = {
            ...state,
            absence_types: action.payload.absences
          }
          break;
    }
    return state;
}
