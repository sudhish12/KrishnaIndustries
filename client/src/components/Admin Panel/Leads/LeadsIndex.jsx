import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
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
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import moment from "moment";
  import React, { useEffect, useState } from "react";
  import Pagination from '@mui/material/Pagination';
  import Stack from '@mui/material/Stack';
import Search from "../../Search Option/Search";
import AdminLeadsFilterForm from "./AdminLeadsFilterForm";
import config from '../../../config'
  
  const LeadsIndex = () => {
    const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
    const today = moment().format("YYYY-MM-DD");
    const [leadsData, setLeadsData] = useState([]);
    const [openError, setOpenError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [followingLeadsData, setFollwingLeadsData] = useState([]);
    const [searchedfilter, setSearchedFilter] = useState([]);
    const [dataPerPage, setDataPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [startTime, setStartTime] = useState(
      moment(`${yesterday} 22:00:00`).format("YYYY-MM-DD HH:mm:ss")
    );
    const [endTime, setEndTime] = useState(
      moment(`${today} 10:00:00`).format("YYYY-MM-DD HH:mm:ss")
    );
    const [filterLeadsData, setFilterLeadsData] = useState(false);
    const [todayLeadsData, setTodayLeadsData] = useState(false);
    const [followData, setFollowData] = useState();
    const [custData,setCustData] = useState([]);
  
    useEffect(() => {
      if (todayLeadsData || filterLeadsData) {
        axios
          .get(
            `${config.apiUrl}/leads/leadsData/?startTime=${startTime}&endTime=${endTime}`
          )
          .then((res) => {
            if (res.data.data.RESPONSE.length > 0) {
              if (filterLeadsData) {
                setLeadsData(res.data.data.RESPONSE);
                setSearchedFilter(res.data.data.RESPONSE)
              } else {
                sessionStorage.setItem(
                  "leadsData",
                  JSON.stringify(res.data.data.RESPONSE)
                );
                setLeadsData(res.data.data.RESPONSE);
                setSearchedFilter(res.data.data.RESPONSE)
              }
            } else {
            }
          })
          .catch((err) => {
            setOpenError(true);
            setErrorMsg(
              err.response?.data?.message ||
                "An error occurred while fetching leads data"
            );
            console.error("Error:", err);
          });
      }
    }, [startTime, endTime, todayLeadsData]);
  
    useEffect(() => {
      if (filterLeadsData) {
      } else {
        const storedData = sessionStorage.getItem("leadsData");
        if (storedData) {
          setLeadsData(JSON.parse(storedData));
          setSearchedFilter(JSON.parse(storedData))
        }
      }
    }, [filterLeadsData, openError, followingLeadsData, todayLeadsData]);
  
    useEffect(() => {
      axios
        .get(`${config.apiUrl}/leads/getFollowingLeadsMobile`)
        .then((res) => {
          setFollwingLeadsData(res.data);
        })
        .catch((err) => {
          console.log("Error Following Data Can't fetched.");
        });
    }, []);

    useEffect(()=>{
      axios.get(`${config.apiUrl}/customer/getCustomer`)
      .then((res)=>{
        setCustData(res.data)
      })
      .catch((err)=>{
        console.log("Error Customer Data Can't fetched.")
      })
    },[])
  
    
  
    
  
    const handleFilterChange = (startTime, endTime) => {
      setStartTime(startTime);
      setEndTime(endTime);
    };
  
    const unFollowedLeads = searchedfilter.filter((lead) => {
      return (
        !followingLeadsData.some(
          (followingLead) => followingLead.leads_mobile === lead.SENDER_MOBILE
        ) &&
        !custData.some((cust) => cust.cust_mobile === lead.SENDER_MOBILE)
      );
    });
  
    const handleChangeDataPerPage = (e) => {
      const newDataPerPage = parseInt(e.target.value, 10);
      if (newDataPerPage == 1) {
        setDataPerPage(unFollowedLeads.length);
        setCurrentPage(1);
      } else {
        setDataPerPage(newDataPerPage);
        setCurrentPage(1);
      }
    };
  
    
  
    const firstIndexOfData = (currentPage - 1) * dataPerPage;
  const lastIndexOfData = currentPage * dataPerPage;
  const currentData = unFollowedLeads.slice(firstIndexOfData, lastIndexOfData);
  
  
    
  
    return (
      <div>
        {filterLeadsData && !todayLeadsData && (
          <h1 className="text-center">Filtered Leads Index</h1>
        )}
  
        {!filterLeadsData && todayLeadsData && (
          <h1 className="text-center">Today Leads</h1>
        )}
  
        {!filterLeadsData && !todayLeadsData && (
          <h1 className="text-center">Leads Index</h1>
        )}
  
        {filterLeadsData ? (
          <AdminLeadsFilterForm onFilterChange={handleFilterChange} />
        ) : (
          <></>
        )}
  
        <Grid container spacing={2}>
          <Grid item xs={4} display="flex" justifyContent="center">
          <Search data={leadsData} setData={setSearchedFilter}  />
          </Grid>
          <Grid item xs={4} display="flex" justifyContent="center">
            {filterLeadsData ? (
              <Button
                onClick={() => setFilterLeadsData(false)}
                variant="contained"
              >
                {" "}
                Cancel Filter
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => setFilterLeadsData(true)}
                  variant="contained"
                >
                  {" "}
                  Apply Filter
                </Button>
                <Button
                  onClick={() => setTodayLeadsData(true)}
                  style={{ marginLeft: "30px" }}
                  variant="contained"
                >
                  Today Leads
                </Button>
              </>
            )}
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
                <TableCell style={{ fontWeight: "bold" }}>S.No</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Mobile Number
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Email</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Company</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Address</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>City</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>State</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentData.map((leads, index) => (
                <TableRow key={leads.UNIQUE_QUERY_ID}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{leads.SENDER_NAME}</TableCell>
                  <TableCell>{leads.SENDER_MOBILE}</TableCell>
                  <TableCell>{leads.SENDER_EMAIL}</TableCell>
                  <TableCell>{leads.SENDER_COMPANY}</TableCell>
                  <TableCell>{leads.SENDER_ADDRESS}</TableCell>
                  <TableCell>{leads.SENDER_CITY}</TableCell>
                  <TableCell>{leads.SENDER_STATE}</TableCell>
                  <TableCell>{leads.QUERY_PRODUCT_NAME}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        <Grid container spacing={2} display='flex' justifyContent='center' className="mt-4">
        <Stack spacing={2}>
        <Pagination
      count={Math.ceil(unFollowedLeads.length / dataPerPage)}
      page={currentPage}
      onChange={(e, value) => setCurrentPage(value)}
      size="small"
      style={{ cursor: 'pointer', '&:hover': { backgroundColor: 'transparent' } }}
    />
      </Stack>
        </Grid>
  
        <Dialog open={openError} onClose={() => setOpenError(false)}>
          <DialogTitle className="text-center bg-danger">ERROR</DialogTitle>
          <DialogContent className="mt-3">
            <p>{errorMsg}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenError(false)}>Close</Button>
          </DialogActions>
        </Dialog>
  
        
      </div>
    );
  };
  
  export default LeadsIndex;
