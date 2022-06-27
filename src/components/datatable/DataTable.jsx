import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatable-source';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const DataTable = () => {

  const [data, setDate] = useState(userRows);

  const handleDelete = (id) =>{
    setDate(data.filter(item => item.id != id));
  };


    const actionColumn =[
        {
            field: "action",
            headerName:"Action",
            width: 200,
            renderCell: (params)=> {
                return(
                    <div className="cellAction">
                      <Link to="/users/test" className='link'>
                        <div className="viewButton">View</div>
                      </Link>
                       
                        <div className="deleteButton"  onClick={() => handleDelete(params.row.id)}>Delete</div>
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
        rows={data}
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