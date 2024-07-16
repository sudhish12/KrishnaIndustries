import { Grid, TextField, MenuItem, Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import config from '../../../config';

const AddFollowingLeads = ({ onClose,data }) => {
    const [formData, setFormData] = useState({
        emp_id: sessionStorage.getItem("emp_id"),
        leads_id: data.UNIQUE_QUERY_ID,
        leads_name: data ? data.SENDER_NAME : "",
        leads_mobile: data ? data.SENDER_MOBILE : "",
        leads_email: data ? data.SENDER_EMAIL : "",
        leads_company: data ? data.SENDER_COMPANY : "",
        leads_address: data ? data.SENDER_ADDRESS : "",
        leads_state: data ? data.SENDER_STATE : "",
        leads_city: data ? data.SENDER_CITY : "",
        product_name: data ? data.QUERY_PRODUCT_NAME : "",
        leads_query: "",
        remember: "",
        reminder_date: "",
    });

    const [errors, setErrors] = useState({
        leads_query: "",
        remember: "",
        reminder_date: "",
    });

    const handleValidation = (name, value) => {
        let errMsg = "";
        const trimmedValue = value && typeof value === 'string' ? value.trim() : value;
        switch (name) {
            case "leads_query":
                if (!trimmedValue) {
                    errMsg = "Leads Query Message is Required";
                }
                break;
            case "remember":
                if (!trimmedValue) {
                    errMsg = "Please Select one";
                } else if (trimmedValue === "yes" && !formData.reminder_date) { 
                    errMsg = "Reminder Date is Required";
                }
                break;
            default:
                break;
        }
        return errMsg;
    };
    

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        const error = handleValidation(name, value);
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        let formErrors = {};

        Object.keys(formData).forEach((name)=>{
            const value = formData[name];
            const error = handleValidation(name,value);
            if(error){
                formErrors[name] = error;
            }
        })

        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors);
        }

        axios.post(`${config.apiUrl}/leads/saveEmpLeads`,formData)
        .then((res)=>{
            console.log("Data Added Successfully.",res)
            onClose()
        })
        .catch((err)=>{
            console.log("Data is not added",err)
        })
    }

    return (
        <div>
            <h1 className='text-center'>Follow Leads</h1>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        name="leads_name"
                        label="Lead Name"
                        value={formData.leads_name}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        name="leads_mobile"
                        label="Lead Mobile"
                        value={formData.leads_mobile}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        name="leads_email"
                        label="Lead Email"
                        value={formData.leads_email}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        name="leads_company"
                        label="Lead Company"
                        value={formData.leads_company}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        name="leads_address"
                        label="Lead Address"
                        value={formData.leads_address}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        name="leads_state"
                        label="Lead State"
                        value={formData.leads_state}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        name="leads_city"
                        label="Lead City"
                        value={formData.leads_city}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        name="product_name"
                        label="Product Name"
                        value={formData.product_name}
                        onChange={handleChangeInput}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        name="leads_query"
                        label="Leads Query"
                        value={formData.leads_query}
                        onChange={handleChangeInput}
                        error={!!errors.leads_query}
                        helperText={errors.leads_query}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    fullWidth
                        select
                        name="remember"
                        label="Remember"
                        value={formData.remember}
                        onChange={handleChangeInput}
                        error={!!errors.remember}
                        helperText={errors.remember}
                    >
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                    </TextField>
                </Grid>
                {formData.remember === "Yes" && (
                    <Grid item xs={6}>
                        <TextField
                        fullWidth
                            name="reminder_date"
                            label="Reminder Date"
                            type="date"
                            value={formData.reminder_date}
                            onChange={handleChangeInput}
                            error={!!errors.reminder_date}
                            helperText={errors.reminder_date}
                            InputLabelProps={{shrink:true}}
                        />
                    </Grid>
                )}
                <Grid item xs={12} display='flex' justifyContent='center'>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddFollowingLeads;
