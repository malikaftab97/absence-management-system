import { React, useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import DataTable from './DataTableComponent';
import CustomizedMenus from './FilterComponent';
import { CirclesWithBar } from "react-loader-spinner";

const App = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const apiPath = `http://localhost:5000/backend/api/routes`;
   const getMemberData = () => {
    setIsLoading(true);
    axios.get(`${apiPath}/`)
    .then((res) => {
        setData(res.data.payload);
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
    getDatabyType(e.value);
  }


  return (
    <div className="App">
      The Absence Management System
        <CustomizedMenus selectedType={selectedType}/>
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
    </div>
  );
}
export default App;
