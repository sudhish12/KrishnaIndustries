import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddPurchase from "./AddPurchase";
import UpdatePurchase from "./UpdatePurchase";
import axios from "axios";
import Search from "../../Search Option/Search";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination'
import PurchaseInvoice from "./PurchaseInvoice";
import config from '../../../config'

const PurchaseIndex = () => {
  const [purchData, setPurchData] = useState([]);
  const [searchPurchData, setSearchPurchData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState();
  const [openDlt, setOpenDlt] = useState(false);
  const [dltData, setDltData] = useState();
  const [openInvoice, setOpenInvoice] = useState(false);
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.apiUrl}/purchase/getPurchase`)
      .then((res) => {
        setPurchData(res.data);
        setSearchPurchData(res.data);
      })
      .catch((err) => {
        console.log("Purchase Data could not be fetched.", err);
      });
  }, [openNew, openEdit, openDlt]);

  const handleChangeDataPerPage = (e) => {
    const newDataPerPage = parseInt(e.target.value, 10);
    if (newDataPerPage == 1) {
      setDataPerPage(purchData.length);
      setCurrentPage(1);
    } else {
      setDataPerPage(newDataPerPage);
      setCurrentPage(1);
    }
  };

  const firstIndexOfData = (currentPage - 1) * dataPerPage;
  const lastIndexOfData = currentPage * dataPerPage;
  const currentData = searchPurchData.slice(firstIndexOfData, lastIndexOfData);

  const handleEdit = (id) => {
    const selectEditData = purchData.find((purch) => purch.purch_id === id);
    if (selectEditData) {
      setEditData(selectEditData);
      setOpenEdit(true);
    }
  };


  const handleInvoice = (id) => {
    const selectInvoiceData = purchData.find((purch) => purch.purch_id === id);
    if (selectInvoiceData) {
      setInvoiceData(selectInvoiceData);
      setOpenInvoice(true);
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
        axios.delete(`${config.apiUrl}/purchase/delete/${dltData}`)
        .then((res)=>{
            setOpenDlt(false)
        })
        .catch((err)=>{
            console.log("Purchase Data is not deleted.",err)
        })
    }
  };

  return (
    <div>
      <h1 className="text-center">Purchase Index</h1>
      <Grid container spacing={3} className="mt-3">
        <Grid item xs={4} display="flex" justifyContent="center">
          <Button onClick={() => setOpenNew(true)}>Add New</Button>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="center">
          <Search data={purchData} setData={setSearchPurchData} />
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
            <TableCell style={{fontWeight:'bold'}}>S.No</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Product Name</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Specification</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Address</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Quantity</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Price</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Total</TableCell>
            <TableCell style={{fontWeight:'bold'}}>GST</TableCell>
            <TableCell style={{fontWeight:'bold'}}>Action</TableCell>
          </TableHead>
          <TableBody>
            {currentData.map((purch, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{purch.pro_name}</TableCell>
                <TableCell>{purch.specification}</TableCell>
                <TableCell>{purch.purch_address}</TableCell>
                <TableCell>{purch.quantity}</TableCell>
                <TableCell>{purch.price}</TableCell>
                <TableCell>{purch.total}</TableCell>
                <TableCell>{purch.gst}</TableCell>
                <TableCell>
                  <Button onClick={()=>handleInvoice(purch.purch_id)}>Invoice</Button>
                  <Button onClick={()=>handleEdit(purch.purch_id)}>Edit</Button>
                  <Button onClick={()=>handleDlt(purch.purch_id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container spacing={2}>
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
      </Grid>

      <Dialog open={openNew} onClose={() => setOpenNew(false)} maxWidth="md">
        <DialogContent>
          <AddPurchase onClose={() => setOpenNew(false)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenNew(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEdit} onClose={() => setOpenEdit(false)} maxWidth="md">
        <DialogContent>
          <UpdatePurchase data={editData} onClose={() => setOpenEdit(false)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)}>Close</Button>
        </DialogActions>
      </Dialog>



      <Dialog open={openInvoice} onClose={() => setOpenInvoice(false)} maxWidth="md">
        <DialogContent>
          <PurchaseInvoice data={invoiceData} onClose={() => setOpenInvoice(false)} />
        </DialogContent>
        <DialogActions className="mt-5">
        {/* <Button onClick={()=>window.print()} style={{ display: 'block' }}>Print</Button>
          <Button onClick={() => setOpenInvoice(false)}>Close</Button> */}
        </DialogActions>
      </Dialog>


      <Dialog open={openDlt} onClose={() => setOpenDlt(false)}>
        <DialogContent>
          <p>Are you sure do you want to delete this purchase data ?</p>
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
    </div>
  );
};

export default PurchaseIndex;
