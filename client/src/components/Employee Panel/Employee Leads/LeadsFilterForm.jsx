import { Button, Grid, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const LeadsFilterForm = ({onFilterChange }) => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [statesData, setStatesData] = useState([]);
    const [citiesData, setCitiesData] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        const getStatesString = sessionStorage.getItem('leadsData');
        if (getStatesString) {
            const getStates = JSON.parse(getStatesString);
            const uniqueStates = [...new Set(getStates.map(lead => lead.SENDER_STATE))];
            setStatesData(uniqueStates);
        }
    }, []);

    useEffect(() => {
        if (selectedState) {
            const getStatesString = sessionStorage.getItem('leadsData');
            if (getStatesString) {
                const getStates = JSON.parse(getStatesString);
                const filteredCities = getStates.filter(city => city.SENDER_STATE === selectedState).map(city => city.SENDER_CITY);
                setCitiesData(filteredCities);
                setFilteredCities(filteredCities);
            }
        } else {
            setCitiesData([]);
            setFilteredCities([]);
        }
    }, [selectedState]);

    const handleFilterClick = () => {
        if (onFilterChange) {
            onFilterChange(startTime, endTime);
        }
    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <LocalizationProvider  dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Start Date"
                            value={startTime}
                            onChange={setStartTime}
                            renderInput={(params) => <TextField {...params} fullWidth  />}
                            sx={{ width: '100%' }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="End Date"
                            value={endTime}
                            onChange={setEndTime}
                            renderInput={(params) => <TextField {...params} fullWidth  />}
                            sx={{ width: '100%' }}
                        />
                    </LocalizationProvider>
                </Grid>
                {/* <Grid item xs={3}>
                    <TextField
                        select
                        fullWidth
                        label="Select State"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                    >
                        {statesData.map((state, index) => (
                            <MenuItem key={index} value={state}>{state}</MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        select
                        fullWidth
                        label="Select City"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        {filteredCities.map((city, index) => (
                            <MenuItem key={index} value={city}>{city}</MenuItem>
                        ))}
                    </TextField>
                </Grid> */}
                <Grid item xs={12} display='flex' justifyContent='center'>
                    <Button variant='contained' onClick={handleFilterClick}>Filter</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default LeadsFilterForm;
