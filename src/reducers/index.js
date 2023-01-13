import { combineReducers } from "redux";
import absenceReducer from './absence.reducer';

const rootReducer = combineReducers({
    absence: absenceReducer,
});

export default rootReducer;