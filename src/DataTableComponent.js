import { React } from 'react';
import { DataGrid } from '@mui/x-data-grid';

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
  { field: 'admitterNote', headerName: 'Admitter Note', width: 500 },
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
  }
];

const DataTable = (props) => {
  const { types } = props;
  return (
    <div style={{ height: 631, width: '100%', marginLeft:'5px'}}>
      <DataGrid
        rows={types}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;