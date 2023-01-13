import { React,useEffect } from  'react';
import Select from 'react-select/creatable';
import { useDispatch, useSelector } from 'react-redux';
import { getAbsenceTypes } from '../actions';

const DropDown = (props) => {
    const dispatch = useDispatch();
    const absencetypes = useSelector(state => state.absence.absence_types);
    const { selectedType } = props;

    useEffect(() => {
        dispatch(getAbsenceTypes());
    },[]);

    return(
        <Select isClearable onChange={selectedType} options={absencetypes} />
    );
}
export default DropDown;