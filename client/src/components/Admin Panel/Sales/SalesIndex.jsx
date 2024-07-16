import React, { useEffect, useState } from 'react'
import Search from '../../Search Option/Search';
import { Button, Dialog, DialogActions, DialogContent, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import UpdatePurchase from '../Purchase/UpdatePurchase';
import AddSales from './AddSales';
import UpdateSales from './UpdateSales';
import SalesInvoice from './SalesInvoice';
import config from '../../../config'

const SalesIndex = () => {
    const [salesData,setSalesData] = useState([]);
    const [searchSalesData,setSearchSalesData] = useState([]);
    const [dataPerPage,setDataPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [openNew, setOpenNew] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDlt, setOpenDlt] = useState(false);
    const [updateData, setUpdateData] = useState();
    const [dltData, setDltData] = useState();
    const [openInvoice, setOpenInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState([]);

    useEffect(() => {
        axios
          .get(`${config.apiUrl}/sales/getSale`)
          .then((res) => {
            setSalesData(res.data);
            setSearchSalesData(res.data);
          })
          .catch((err) => {
            console.log("Sales Data could not be fetched.", err);
          });
      }, [openNew, openUpdate, openDlt]);

      const handleChangeDataPerPage = (e) => {
        const newDataPerPage = parseInt(e.target.value, 10);
        if (newDataPerPage == 1) {
          setDataPerPage(salesData.length);
          setCurrentPage(1);
        } else {
          setDataPerPage(newDataPerPage);
          setCurrentPage(1);
        }
      };
    
      const firstIndexOfData = (currentPage - 1) * dataPerPage;
      const lastIndexOfData = currentPage * dataPerPage;
      const currentData = searchSalesData.slice(firstIndexOfData, lastIndexOfData);

      const handleEdit = (id) => {
        const selectEditData = salesData.find((sale) => sale.sale_id === id);
        if (selectEditData) {
          setUpdateData(selectEditData);
          setOpenUpdate(true);
        }
      };

      const handleDlt = (id) => {
        if (id) {
          setDltData(id);
          setOpenDlt(true);
        }
      };
    
      const confirmDlt = () => {
        if(dltData){
            axios.delete(`${config.apiUrl}/sales/delete/${dltData}`)
            .then((res)=>{
                setOpenDlt(false)
            })
            .catch((err)=>{
                console.log("Sales Data is not deleted.",err)
            })
        }
      };

      const handleInvoice = (id) => {
        const selectInvoiceData = salesData.find((sale) => sale.sale_id === id);
        if (selectInvoiceData) {
          setInvoiceData(selectInvoiceData);
          setOpenInvoice(true);
        }
      };
    
  return (
    <>
      <h1 className="text-center">Sales Index</h1>
      <Grid container spacing={3} className="mt-3">
        <Grid item xs={4} display="flex" justifyContent="center">
          <Button onClick={() => setOpenNew(true)}>Add New</Button>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Search data={salesData} setData={setSearchSalesData} />
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
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
      <TableContainer component={Paper} className="mt-3">
        <Table>
          <TableHead>
            <TableRow>
            <TableCell style={{fontWeight:'bold'}}>S.No</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Product Name</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Address</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Quantity</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Price</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Total</TableCell>
            <TableCell style={{fontWeight:'bold'}}>GST</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((sale, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{sale.pro_name}</TableCell>
                <TableCell>{sale.sale_address}</TableCell>
                <TableCell>{sale.quantity}</TableCell>
                <TableCell>{sale.price}</TableCell>
                <TableCell>{sale.gst}</TableCell>
                <TableCell>{sale.total}</TableCell>
                <TableCell>
                  <Button onClick={()=>handleInvoice(sale.sale_id)}>Invoice</Button>
                  <Button onClick={()=>handleEdit(sale.sale_id)}>Edit</Button>
                  <Button onClick={()=>handleDlt(sale.sale_id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Grid container spacing={2}>
        <Grid item xs={12} display='flex' justifyContent='center'>
            <Stack spacing={2}>
                <Pagination
                count={Math.ceil(purchData.length/dataPerPage)}
                page={currentPage}
                onChange={(e,value)=>setCurrentPage(value)}
                size="small"
                />
            </Stack>
        </Grid>
      </Grid> */}

      <Dialog open={openNew} onClose={() => setOpenNew(false)} maxWidth="md">
        <DialogContent>
          <AddSales onClose={() => setOpenNew(false)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNew(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)} maxWidth="md">
        <DialogContent>
          <UpdateSales data={updateData} onClose={() => setOpenUpdate(false)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUpdate(false)}>Close</Button>
        </DialogActions>
      </Dialog>



      <Dialog open={openInvoice} onClose={() => setOpenInvoice(false)} maxWidth="md">
        <DialogContent>
          <SalesInvoice data={invoiceData} onClose={() => setOpenInvoice(false)} />
        </DialogContent>
        <DialogActions className="mt-5">
        <Button onClick={()=>window.print()} style={{ display: 'block' }}>Print</Button>
          <Button onClick={() => setOpenInvoice(false)}>Close</Button>
        </DialogActions>
      </Dialog>


      <Dialog open={openDlt} onClose={() => setOpenDlt(false)}>
        <DialogContent>
          <p>Are you sure do you want to delete this Sales data ?</p>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={confirmDlt}
            style={{ backgroundColor: "red", color: "whitesmoke" }}
          >
            Delete
          </Button>
          <Button
            onClick={() => setOpenDlt(false)}
            style={{ backgroundColor: "green", color: "whitesmoke" }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SalesIndex
