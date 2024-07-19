import {
  Button,
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
import React, { useEffect, useState } from "react";
import moment from "moment";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Search from "../../Search Option/Search";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import config from '../../../config'

const EmpFollowLeadsIndex = () => {
  const [leadsData, setLeadsData] = useState([]);
  const [filteredLeadsData, setFilteredLeadsData] = useState([]);
  const [dataPerPage, setDataPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeeData, setEmployeeData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [reminderDate, setReminderDate] = useState(moment().format("YYYY-MM-DD"));
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [leadsState, setLeadsState] = useState('');
  const [leadsCity,setLeadsCity] = useState('');
  const [empName,setEmpName] = useState('');
  const [tabValue, setTablValue] = useState(1);



  useEffect(() => {
    axios.get(`${config.apiUrl}/leads/empFollowLeadsForAdmin`)
        .then((res) => {
            const uniqueEmployees = Array.from(new Set(res.data.map(emp => emp.emp_id)))
                .map(empId => res.data.find(emp => emp.emp_id === empId));
            setEmployeeData(uniqueEmployees);
            const states = new Set(res.data.map(state => state.leads_state));
            setStateData([...states]); // Convert Set to array
            const cities = new Set(res.data.map(city => city.leads_city));
            setCityData([...cities]); // Convert Set to array
        })
        .catch((err) => {
            console.log("Leads data is not fetched.", err)
        });
}, [])


  useEffect(() => {
    if (tabValue == 1) {
      axios
        .get(
          `${config.apiUrl}/leads/empFollowLeadsForAdmin
        `
        )
        .then((res) => {
          console.log("Follow Leads Data :", res);
          setLeadsData(res.data);
          setFilteredLeadsData(res.data);
        })
        .catch((err) => {
          console.log("Following Leads Data is not fetched.");
        });
    } else if (tabValue == 2) {
      axios
        .get(
          `${config.apiUrl}/leads/empFollowLeadsForAdmin?reminderDate=${reminderDate}
        `
        )
        .then((res) => {
          console.log("Follow Leads Data :", res);
          setLeadsData(res.data);
          setFilteredLeadsData(res.data);
        })
        .catch((err) => {
          console.log("Following Leads Data is not fetched.");
        });
    }
  }, [tabValue]);

  const handleFilter = () => {
    const stateParam = leadsState !== '' ? leadsState : 'null';
    const cityParam = leadsCity !== '' ? leadsCity : 'null';
    const empIdParam = empName !== '' ? empName : 'null';
    const reminderDateParam = reminderDate !== '' ? reminderDate : 'null';
    const startDateParam = startDate !== '' ? moment(startDate).format('YYYY-MM-DD 00:00:00') : 'null';
    const endDateParam = endDate !== '' ? moment(endDate).format('YYYY-MM-DD 23:59:50') : 'null';

    axios
        .get(`${config.apiUrl}/leads/empFollowLeadsForAdmin`, {
            params: {
                state: stateParam,
                city: cityParam,
                emp_id: empIdParam,
                reminderDate : reminderDateParam,
                startDate : startDateParam,
                endDate : endDateParam
            }
        })
        .then((res) => {
            console.log("Follow Leads Data:", res);
            setLeadsData(res.data);
            setFilteredLeadsData(res.data);
            console.log("Data:", res.data);
        })
        .catch((err) => {
            console.log("Following Leads Data is not fetched.");
        });
};

const handleFilterClear = () => {
  setStartDate("");
  setEndDate(""); 
  setLeadsState("") 
  setLeadsCity("");
  setEmpName(""); 
  setReminderDate(""); 
};

  

  const handleChangeDataPerPage = (e) => {
    const newDataPerPage = parseInt(e.target.value, 10);
    if (newDataPerPage == 1) {
      setDataPerPage(leadsData.length);
      setCurrentPage(1);
    } else {
      setDataPerPage(newDataPerPage);
      setCurrentPage(1);
    }
  };

  const firstIndexOfData = (currentPage - 1) * dataPerPage;
  const lastIndexOfData = currentPage * dataPerPage;
  const currentData = filteredLeadsData
    ? filteredLeadsData.slice(firstIndexOfData, lastIndexOfData)
    : [];

  return (
    <div style={{ padding: "10px" }}>
      <h1 className="text-center">Followed Leads Index</h1>
      <Grid container spacing={3}>
        {tabValue == 3 ? (
          <>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Start Date"
                type="date"
                value={startDate}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="End Date"
                type="date"
                value={endDate}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    select
                    label="Employee Name"
                    name="emp_name"
                    onChange={(e)=>setEmpName(e.target.value)}
                    value={empName}
                >
                    {employeeData.map((emp, index) => (
                        <MenuItem key={index} value={emp.emp_id}>{emp.emp_name}</MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    label="Reminder Date"
                    name="reminderDate"
                    type='date'
                    onChange={(e)=>setReminderDate(e.target.value)}
                    value={reminderDate}
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    select
                    label="Select State"
                    name="state"
                    onChange={(e)=>setLeadsState(e.target.value)}
                    value={leadsState}
                >
                    {stateData.map((state, index) => (
                        <MenuItem key={index} value={state}>{state}</MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    select
                    label="Select City"
                    name="city"
                    onChange={(e)=>setLeadsCity(e.target.value)}
                    value={leadsCity}
                >
                    {cityData.map((city, index) => (
                        <MenuItem key={index} value={city}>{city}</MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <Button onClick={handleFilter}>Filter</Button>
              <Button onClick={handleFilterClear}>Clear</Button>
            </Grid>
          </>
        ) : (
          <></>
        )}

        <Grid item xs={4}>
          <Search data={leadsData} setData={setFilteredLeadsData} />
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="end">
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs
              value={tabValue}
              onChange={(event, newValue) => setTablValue(newValue)}
              centered
            >
              <Tab label="All" value={1} />
              <Tab label="Today Remember Leads" value={2} />
              <Tab label="Apply filter" value={3} />
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="end">
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

      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow style={{ fontWeight: "bold", backgroundColor: "#FFF9C4" }}>
              <TableCell style={{ fontWeight: "bold" }}>S.No</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Employee Name
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Leads Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Leads Mobile</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Leads Email</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Leads Company
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Address</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>State</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>City</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Product Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Query</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Remember</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>
                Reminder Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData.map((leads, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{leads.emp_name}</TableCell>
                <TableCell>{leads.leads_name}</TableCell>
                <TableCell>{leads.leads_mobile}</TableCell>
                <TableCell>{leads.leads_email}</TableCell>
                <TableCell>{leads.leads_company}</TableCell>
                <TableCell>{leads.leads_address}</TableCell>
                <TableCell>{leads.leads_state}</TableCell>
                <TableCell>{leads.leads_city}</TableCell>
                <TableCell>{leads.product_name}</TableCell>
                <TableCell>{leads.leads_query}</TableCell>
                <TableCell>{leads.remember}</TableCell>
                <TableCell>
                  {moment(leads.reminder_date).format("YYYY-MM-DD")}
                </TableCell>

                <TableCell>
                  <Button>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        className="mt-4"
      >
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(filteredLeadsData.length / dataPerPage)}
            page={currentPage}
            onChange={(e, value) => setCurrentPage(value)}
            size="small"
            style={{
              cursor: "pointer",
              "&:hover": { backgroundColor: "transparent" },
            }}
          />
        </Stack>
      </Grid>
    </div>
  );
};

export default EmpFollowLeadsIndex;
