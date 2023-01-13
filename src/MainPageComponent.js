import { React, useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import DataTable from './DataTableComponent';
import DropDown from './DropDownComponent'
import DateInput from './DateInputComponent';
import { CirclesWithBar } from "react-loader-spinner";
import Grid from '@mui/material/Grid';

const MainPageComponent = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const apiPath = `http://localhost:5000/backend/api/routes`;

   const getMemberData = (date='') => {
    setIsLoading(true);
    axios.get(`${apiPath}?date=${date}`)
    .then((res) => {
        setData(res.data);
        setIsLoading(false);
    })
    .catch((err) => {
        console.log(err);
        setIsLoading(false);
    });
  }

  const getDatabyType = (type) =>{
    setIsLoading(true);
    axios.get(`${apiPath}/absence-type/${type}`)
    .then((res) => {
        setData(res.data);
        setIsLoading(false);
    })
    .catch((err) => {
        console.log(err);
        setIsLoading(false);
    });
  }

  useEffect(() => {
    getMemberData();
  },[]);

  const selectedType = (e) =>{
    if(e){
      getDatabyType(e.value);
    }else{
      getMemberData();
    }
  }

  const setDate= (e) =>{
      getMemberData(e.target.value);
  }

  return (
    <Grid className="App">
        <h2>The Absence Management System</h2>
        <Grid container spacing={1}>
          <Grid item xs={2} style={{marginLeft:'5px'}}>
            <DropDown selectedType={selectedType}/>
          </Grid>
          <Grid item xs={2}>
            <DateInput setDate={setDate} />
          </Grid>
          <Grid item xs={8}/>
        </Grid>
        { isLoading && <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
          /> 
        }
        <DataTable types={data}/>
    </Grid>
  );
}
export default MainPageComponent;
