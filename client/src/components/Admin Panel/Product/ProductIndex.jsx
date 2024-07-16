import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Search from '../../Search Option/Search';
import { useNavigate } from 'react-router-dom';
import config from '../../../config'

const ProductIndex = () => {
    const [productData,setProductData] = useState([]);
    const [searchProductData,setSearchProductData] = useState([]);
    const [updateData,setUpdateData] = useState();
    const [dltData,setDltData] = useState();
    const [dataPerPage,setDataPerPage] = useState(5);
    const [currentPage,setCurrentPage] = useState(1);
    const [openNew,setOpenNew] = useState(false);
    const [openUpdate,setOpenUpdate] = useState(false);
    const [openDlt,setOpenDlt] = useState(false);
    const navigate = useNavigate();

   useEffect(()=>{
    axios.get(`${config.apiUrl}/product/getProductData`)
    .then((res)=>{
        setProductData(res.data);
        setSearchProductData(res.data);
    })
    .catch(()=>{
        console.log("Product Data is not fetched.")
    })
   },[openNew,openUpdate,openDlt])

   const handleUpdate = (id) =>{
    const selectUpdate = productData.find((pro)=>pro.pro_id === id);
    if(selectUpdate){
        setUpdateData(selectUpdate);
        setOpenUpdate(true);
    }
   }

   const handleDlt = (id) =>{
    if(id){
        setDltData(id);
        setOpenDlt(true)
    }
   }

   const confirmDlt = () =>{
    console.log("Dlt Data :",dltData)
    if(dltData){
        axios.delete(`${config.apiUrl}/product/delete/${dltData}`)
        .then((res)=>{
            setOpenDlt(false)
        })
        .catch((err)=>{
            console.log("Product Data is not deleted.",err)
        })
    }
   }

   const handleChangeDataPerPage = (e) =>{
    const newDataPerPage = parseInt(e.target.value,10);
    if(newDataPerPage == 1){
        setDataPerPage(productData.length);
        setCurrentPage(1)
    }else{
        setDataPerPage(newDataPerPage);
        setCurrentPage(1);
    }
   }

   const firstIndexOfData = (currentPage-1) * dataPerPage;
   const lastIndexOfData = currentPage * dataPerPage;
   const currentData = searchProductData.slice(firstIndexOfData,lastIndexOfData);


  return (
    <>
    <h1 className='text-center'>Product Index</h1>
    <Grid container spacing={3}>
        <Grid item xs={4}><Button onClick={()=>setOpenNew(true)}>Add New</Button></Grid>
        <Grid item xs={4}>
            <Search data={productData} setData={setSearchProductData}/>
        </Grid>
        <Grid item xs={4}>
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
    <TableContainer component={Paper} className='mt-5'>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight:'bold'}}>S.No</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Product Name</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Product Image</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Product description</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Specification</TableCell>
                    <TableCell style={{fontWeight:'bold'}}>Action</TableCell>
                </TableRow>
               
            </TableHead>
            <TableBody>
                {currentData.map((pro,index)=>(
                    <TableRow key={index}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{pro.pro_name}</TableCell>
                        <TableCell>
                        <img src={`${config.apiUrl}/uploads/${pro.pro_img}`} alt={pro.pro_name} height='100' width='100' />
                        </TableCell>
                        <TableCell>{pro.description}</TableCell>
                        <TableCell>
                        <Button onClick={() => navigate(`/specIndex/${pro.pro_id}`)}> Specification index</Button>

                        </TableCell>
                        <TableCell>
                            <Button onClick={()=>handleUpdate(pro.pro_id)}>Edit</Button>
                            <Button onClick={()=>handleDlt(pro.pro_id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>

    <Dialog open={openNew} onClose={()=>setOpenNew(false)} maxWidth='md'>
        <DialogContent>
            <AddProduct onClose={()=>setOpenNew(false)}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpenNew(false)}>Close</Button>
            </DialogActions>
    </Dialog>

    <Dialog open={openUpdate} onClose={()=>setOpenUpdate(false)} maxWidth='md'>
        <DialogContent>
            <UpdateProduct data={updateData} onClose={()=>setOpenUpdate(false)}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpenUpdate(false)}>Close</Button>
            </DialogActions>
    </Dialog>

    <Dialog open={openDlt} onClose={()=>setOpenDlt(false)} maxWidth='md'>
        <DialogTitle>Delete</DialogTitle>
        <DialogContent>
            <p>Are you sure do you want delete this product ?</p>
        </DialogContent>
        <DialogActions>
            <Button style={{backgroundColor:'red',color:'white'}} onClick={confirmDlt}>Delete</Button>
            <Button style={{backgroundColor:'green',color:'white'}} onClick={()=>setOpenDlt(false)}>Close</Button>
        </DialogActions>
    </Dialog>
    
    </>
  )
}

export default ProductIndex
