import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatable-source';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { getServices } from '../../services/api/actions';

const DataTable = () => {

  const [data, setData] = useState(userRows);
  const [rq, setRq] = useState();
  const [load, setLoad] = useState(true);
  

  const handleDelete = (id) =>{
    setData(data.filter(item => item.id !== id));
  };
  const handleFetch = () =>{
    let response =  getServices();   
    console.log('Llamda: ', response);
  };
  console.log('jjajjaja ');
  

  /*useEffect( () =>{

    const test = async ()=>{
      let response =  await getServices();
      setRq( await response);
      return await response;
    }
    
    console.log('Response: ', test())
    console.log('rq: ',rq)
  },[load]);*/

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