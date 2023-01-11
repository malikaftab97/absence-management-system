import { React,useEffect,useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import { CirclesWithBar } from "react-loader-spinner";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', 
    headerName: 'Name', 
    width: 150, 
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    valueGetter: (params) =>
      `${params.row.userData[0].name || ''}`,
  },
  { field: 'type', headerName: 'Type', width: 150 },
  {
    field: 'Period',
    headerName: 'Period',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 250,
    valueGetter: (params) =>
      `${params.row.startDate || ''} to ${params.row.endDate || ''}`,
  },
  { field: 'memberNote', headerName: 'Member Note', width: 500 },
  { field: 'status', 
    headerName: 'Status', 
    width: 150,
    valueGetter: (params) =>{
      let status = '';
      if(params.row.confirmedAt){
        status = 'Confirmed';
      }else if(params.row.rejectedAt){
        status = 'Rejected';
      }else{
        status = 'Requested';
      }
      return status;
    }
  },
  { field: 'admitterNote', headerName: 'Admitter Note', width: 500 },
];

export default function DataTable() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    getMemberData();
  },[]);
  return (
    <div style={{ height: 600, width: '100%' }}>
      {
          isLoading ? <CirclesWithBar
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
        /> : <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
      }
    </div>
  );
}
