import { React,useEffect,useState } from  'react';
import Select from 'react-select/creatable';
import axios from 'axios';

const FilterComponent = (props) => {
    const [types,setTypes] = useState([]);
    const apiPath = `http://localhost:5000/backend/api/routes`;
    const { selectedType } = props;

    const getTypes = () => {
        axios.get(`${apiPath}/absence-types`)
        .then((res) => {
            setTypes(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    useEffect(() => {
        getTypes();
    },[]);

    return(
        <Select isClearable onChange={selectedType} options={types} />
    );
}
export default FilterComponent