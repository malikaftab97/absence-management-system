import './App.css';
import DataTable from './DataTableComponent';
import CustomizedMenus from './FilterComponent';

function App() {
  return (
    <div className="App">
      The Absence Management System
        <CustomizedMenus/>
        <DataTable/>
    </div>
  );
}
export default App;
