import { Button, Dialog, DialogActions, DialogContent, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Search from '../../Search Option/Search';
import AdminUpdateCustomer from './AdminUpdateCustomer';
import AdminAddCustPurch from '../Admin Customer Purchase/AdminAddCustPurch';
import config from '../../../config'

const AdminCustomerIndex = () => {
    const [custData,setCustData] = useState([]);
    const [searchCustData,setSearchCustData] = useState([]);
    const [dataPerPage,setDataPerPage] = useState(5);
    const [currentPage,setCurrentPage] = useState(1);
    const [openNew,setOpenNew] = useState(false);
    const [openUpdate,setOpenUpdate] = useState(false);
    const [openDlt,setOpenDlt] = useState(false);
    const [updateData,setUpdateData] = useState([]);
    const [dltData,setDltData] = useState();
    const [openPurch,setOpenPurch] = useState(false);
    const [purchCustId,setPurchCustId] =useState();

    useEffect(()=>{
        axios.get(`${config.apiUrl}/customer/getCustomerForAdmin`)
        .then((res)=>{
            setCustData(res.data    );
            setSearchCustData(res.data);
        })
        .catch((err)=>{
            console.log("Customer Data is not fetched.")
        })
    },[openNew,openUpdate,openDlt])

    const handleUpdate = (id) =>{
        const selectUpdate = custData.find((cust)=>cust.cust_id === id);
        if(selectUpdate){
          setUpdateData(selectUpdate);
          setOpenUpdate(true)
        }
      }

      const handleDlt = (id) => {
        setDltData(id);
        setOpenDlt(true);
      }
    
      const confirmDlt = () => {
        axios.delete(`${config.apiUrl}/customer/delete/${dltData}`)
          .then((res) => {
            setOpenDlt(false);
          })
          .catch((err) => {
           console.log("Error deleting data. Please try again later.")
          });
      }
    
      const handleChangeDataPerPage = (e) => {
        const newDataPerPage = parseInt(e.target.value, 10);
        if (newDataPerPage == 1) {
          setDataPerPage(custData.length);
          setCurrentPage(1);
        } else {
          setDataPerPage(newDataPerPage);
          setCurrentPage(1);
        }
      };
    
      
    
      const firstIndexOfData = (currentPage - 1) * dataPerPage;
    const lastIndexOfData = currentPage * dataPerPage;
    const currentData = searchCustData.slice(firstIndexOfData, lastIndexOfData);

    const handleCustPurch = (id) =>{
        setPurchCustId(id);
        setOpenPurch(true)
    }

  return (
    <>
      <h1 className='text-center'>Customer Index</h1>
      <Grid container spacing={2} className='mt-3'>
        {/* <Grid item xs={4} display='flex' justifyContent='center'>
          <Button onClick={() => setOpenNew(true)}>Add New Customer</Button>
        </Grid> */}
        <Grid item xs={4} display='flex' justifyContent='center'>
          <Search data={custData} setData={setSearchCustData} />
        </Grid>
        <Grid item xs={4} display='flex' justifyContent='center'>
        <FormControl>
            <Select value={dataPerPage} onChange={handleChangeDataPerPage}>
              <MenuItem value={5}>5 Per Page</MenuItem>
              <MenuItem value={10}>10 Per Page</MenuItem>
              <MenuItem value={15}>15 Per Page</MenuItem>
              <MenuItem value={1}>All Per Page</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <TableContainer component={Paper} className='mt-3'>
        <Table style={{ borderCollapse: 'collapse' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight:'bold'}}>S.no</TableCell>
              <TableCell style={{fontWeight:'bold'}}>Employee Name</TableCell>
              <TableCell style={{fontWeight:'bold'}}>Customer Name</TableCell>
              <TableCell style={{fontWeight:'bold'}}>Mobile</TableCell>
              <TableCell style={{fontWeight:'bold'}}>Email</TableCell>
              <TableCell style={{fontWeight:'bold'}}>Company</TableCell>
              <TableCell style={{fontWeight:'bold'}}>Address</TableCell>
              <TableCell style={{fontWeight:'bold'}}>State</TableCell>
              <TableCell style={{fontWeight:'bold'}}>City</TableCell>
              <TableCell style={{fontWeight:'bold'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((cust, index) => (
              <TableRow key={cust.cust_id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{cust.emp_name}</TableCell>
                <TableCell>{cust.cust_name}</TableCell>
                <TableCell>{cust.cust_mobile}</TableCell>
                <TableCell>{cust.cust_email}</TableCell>
                <TableCell>{cust.cust_company}</TableCell>
                <TableCell>{cust.cust_address}</TableCell>
                <TableCell>{cust.cust_state}</TableCell>
                <TableCell>{cust.cust_city}</TableCell>
                <TableCell>
                  <Button onClick={()=>handleCustPurch(cust.cust_id)}>Purchase</Button>
                  <Button onClick={()=>handleUpdate(cust.cust_id)}>Edit</Button>
                  <Button onClick={() => handleDlt(cust.cust_id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={2} display='flex' justifyContent='center' className="mt-4">
      <Stack spacing={2}>
      <Pagination
    count={Math.ceil(custData.length / dataPerPage)}
    page={currentPage}
    onChange={(e, value) => setCurrentPage(value)}
    size="small"
    style={{ cursor: 'pointer', '&:hover': { backgroundColor: 'transparent' } }}
  />
    </Stack>
      </Grid>

      

      <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)} maxWidth='lg'>
  <DialogContent>
    <AdminUpdateCustomer data={updateData} onClose={() => setOpenUpdate(false)} />
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenUpdate(false)}>Close</Button>
  </DialogActions>
</Dialog>


      <Dialog open={openDlt} onClose={() => setOpenDlt(false)}>
        <DialogContent>
          <p>Are you sure you want to delete this Customer data?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={confirmDlt} style={{ backgroundColor: 'red', color: 'white' }}>Delete</Button>
          <Button onClick={() => setOpenDlt(false)} style={{ backgroundColor: 'green', color: 'white' }}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openPurch} onClose={() => setOpenPurch(false)} maxWidth='lg'>
  <DialogContent>
    <AdminAddCustPurch cust_id={purchCustId} onClose={() => setOpenPurch(false)} />
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenPurch(false)}>Close</Button>
  </DialogActions>
</Dialog>
    </>
  )
}

export default AdminCustomerIndex

