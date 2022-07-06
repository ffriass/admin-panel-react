import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatable-source';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { getServices } from '../../services/api/actions';
import useFetch from '../../core/hooks/useFetch';
import VerticalBarsLoading from '../loading-indicator/Loading'

const DataTable = (colums, rows = []) => {

  const [data, setData] = useState(userRows);
  const [response, callback, isloading] = useFetch(getServices())
  console.log('Datatable ');
  const handleDelete = (id) =>{
    setData(data.filter(item => item.id !== id));
  };
  const handleFetch = () =>{  };
  
    const actionColumn =[
        {
            field: "action",
            headerName:"Action",
            width: 200,
            renderCell: (params)=> {
                return(
                    <div className="cellAction">
                      <Link to={`/users/${params.row.id}`} className='link'>
                        <div className="viewButton">View</div>
                      </Link>
                        <div className="deleteButton"  onClick={() => handleDelete(params.row.id)}>Delete</div>
                        {/* <div className="deleteButton"  onClick={() => handleFetch()}>Load</div> */}
                        {/* <div className="viewButton"></div> */}
                    </div>
            )
    }}];

  return (
    <div className="datatable">     
      <div className="datatableTitle">       
        <Link to="/users/new" className='link'>
          Add new user
        <AddIcon/>
        </Link>
      </div>      
        <DataGrid className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]} 
        loading={false}
        autoHeight
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;