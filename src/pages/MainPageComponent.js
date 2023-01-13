import { React, useEffect, useState} from 'react';
import axios from 'axios';
import DataTable from '../components/DataTableComponent';
import DropDown from '../components/DropDownComponent'
import DateInput from '../components/DateInputComponent';
import { CirclesWithBar } from "react-loader-spinner";
import Grid from '@mui/material/Grid';
import ErrorBoundary from '../components/ErrorBoundryComponent';

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
    <Grid className="App" style={{ marginLeft:'5px'}}>
        <h2>Members Absence Listing</h2>
        <Grid container spacing={1} style={{ marginBottom:'4px'}}>
          <Grid item xs={2}>
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
        <ErrorBoundary>
            <DataTable types={data} />
        </ErrorBoundary>
    </Grid>
  );
}
export default MainPageComponent;
