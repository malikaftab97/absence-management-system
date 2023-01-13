import { absenceConstants } from "./constants";
import axios from 'axios';

export const showLoader = () => dispatch => {
    dispatch({
      type: `${absenceConstants.SHOW_LOADER}_REQUEST`
    });
}
  
export const hideLoader = () => dispatch => {
    dispatch({
      type: `${absenceConstants.HIDE_LOADER}_REQUEST`
    });
}
  
export const getAbsences = () => {
        return async dispatch => {
            dispatch({ type: `${absenceConstants.GET_ABSENCES}_REQUEST` });
            dispatch({ type: `${absenceConstants.SHOW_LOADER}_REQUEST` });
             axios.get('https://ogoulmeeting.com/api/groups')
              .then(responce => {
                //   console.log(responce)
                    const absences = responce.data.data.groups;
                    dispatch({
                        type: `${absenceConstants.GET_ABSENCES}_SUCCESS`,
                        payload: { absences }
                    });
                    dispatch({
                        type: `${absenceConstants.HIDE_LOADER}_REQUEST`
                      });

            })
            .catch(error => {
                //console.log(error);
                dispatch({
                    type: `${absenceConstants.GET_ABSENCES}_FAILURE`,
                    payload: { error }
                })
            })
        }

}

export const getAbsenceTypes = () => {
    return async dispatch => {
        dispatch({ type: `${absenceConstants.GET_ABSENCE_TYPES}_REQUEST` });
        dispatch({ type: `${absenceConstants.SHOW_LOADER}_REQUEST` });
         axios.get(`http://localhost:5000/backend/api/routes/absence-types`)
          .then(responce => {
            //   console.log(responce)
                const absences = responce.data;
                dispatch({
                    type: `${absenceConstants.GET_ABSENCE_TYPES}_SUCCESS`,
                    payload: { absences }
                });
                dispatch({
                    type: `${absenceConstants.HIDE_LOADER}_REQUEST`
                  });

        })
        .catch(error => {
            //console.log(error);
            dispatch({
                type: `${absenceConstants.GET_ABSENCE_TYPES}_FAILURE`,
                payload: { error }
            })
        })
    }
}

