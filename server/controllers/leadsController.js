const express = require('express');
const router = express.Router();
const moment = require('moment');
const axios = require('axios');

module.exports = (db) =>{

    router.get('/leadsData', async (req, res) => {
        try {
            const { startTime, endTime } = req.query; 
            const currentDate = moment(); // Change here
            const getApiLogs = 'select * from api_logs order by log_id desc limit 1';
            db.query(getApiLogs, async (logErr,logRes)=>{
                if(logErr){
                    res.status(500).json({message:"Internal Server Error."})
                }else{
                    if(logRes.length > 0){
                        const apiHitTime = moment(logRes[0].api_hit_time);
                        const diffMinutes = moment.duration(currentDate.diff(apiHitTime)).asMinutes();
    
                        if(diffMinutes > 5){
                            if (startTime && endTime) {
                                const start = moment(startTime).format("DD-MM-YYYY HH:mm:ss");
                                const end = moment(endTime).format("DD-MM-YYYY HH:mm:ss");
                                
                                const response = await axios.get(`https://mapi.indiamart.com/wservce/crm/crmListing/v2/?glusr_crm_key=mR20Er1s5HfDQPep4XWK7l+Pp1LDnzI=&start_time=${start}&end_time=${end}`);
                                const data = response.data;
                    
                                let api_hit_time = moment().format('YYYY-MM-DD HH:mm:ss'),
                                start_date = moment(startTime).format('YYYY-MM-DD HH:mm:ss'),
                                end_date = moment(endTime).format('YYYY-MM-DD HH:mm:ss'),
                                count = data.TOTAL_RECORDS,
                                res_code = data.CODE,
                                message = ''
                                if (data.MESSAGE === '') {
                                    message = `Success. ${response.data.TOTAL_RECORDS} leads were returned for this API request.`;
                                } else {
                                    message = response.data.MESSAGE;
                                }
                                const saveApiLog = 'INSERT INTO api_logs (api_hit_time, start_date, end_date, count, res_code, message, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)';
                                db.query(saveApiLog,[api_hit_time,start_date,end_date,count,res_code,message,api_hit_time],(saveErr,saveRes)=>{
                                    if(saveErr){
                                        res.status(500).json({message:"Api Log is not added"})
                                    }else{
                                        res.status(200).json({message:"Api logs stored successfully.",data});
                                    }
                                })
                            } else {
                                res.status(400).json({ error: 'Missing startTime or endTime parameters' }); 
                            }
                        }else{
                            res.status(429).json({message:"It is advised to hit this API once in every 5 minutes,but it seems that you have crossed this limit. Please try again after 5 minutes."})
                        }
                        
                    }
                }
            })
            
        } catch (error) {
            console.error('Error fetching data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    
    
    


    router.post('/saveEmpLeads',(req,res)=>{
        const {
            emp_id,
            leads_id,
            leads_name,
            leads_mobile,
            leads_email,
            leads_company,
            leads_address,
            leads_state,
            leads_city,
            product_name,
            leads_query,
            remember,
            reminder_date
        } = req.body;
        
        const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    
        const saveLeads = `INSERT INTO following_leads
            (
                emp_id,
                leads_id,
                leads_name,
                leads_mobile,
                leads_email,
                leads_company,
                leads_address,
                leads_state,
                leads_city,
                product_name,
                leads_query,
                remember,
                reminder_date,
                created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
        // Provide default values for missing fields using nullish coalescing operator
        const params = [
            emp_id ?? null,
            leads_id ?? null,
            leads_name ?? null,
            leads_mobile ?? null,
            leads_email ?? null,
            leads_company ?? null,
            leads_address ?? null,
            leads_state ?? null,
            leads_city ?? null,
            product_name ?? null,
            leads_query ?? null,
            remember ?? null,
            reminder_date ?? null,
            currentDate
        ];
    
        db.query(saveLeads, params, (err, results) => {
            if(err) {
                console.error("Error saving leads data:", err);
                 res.status(500).json({ message: "Internal server error." });
            } else {
                console.log("Leads data added successfully.");
                 res.status(200).json({ message: "Leads data added successfully." });
            }
        });
    });


    
    router.get('/getFollowingLeadsMobile',(req,res)=>{
        const getData = 'select leads_mobile from following_leads';
        db.query(getData,(getErr,getRes)=>{
            if(getErr){
                res.status(500).json({message:"Internal server error."});
            }else if(getRes.length == 0){
                res.status(404).json({message:"Following Leads Not Found."})
            }else{
                res.status(200).json(getRes)
            }
        })
    })
    


    router.get('/followingLeadsByEmpId', (req, res) => {
        const { emp_id, reminderDate, startDate, endDate, state, city } = req.query;
        let query = `SELECT leads.*, emp.emp_name 
        FROM following_leads leads 
        INNER JOIN employee emp 
        ON emp.emp_id = leads.emp_id
        WHERE leads.emp_id = ${emp_id}`;

    
        if (reminderDate != 'null' && reminderDate !== undefined) {
            query += ` AND leads.reminder_date = '${reminderDate}'`;
        }
    
        if (startDate && endDate && endDate != 'null') {
            query += ` AND leads.created_at BETWEEN '${startDate}' AND '${endDate}'`;
        } else if (startDate && startDate != 'null') {
            const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
            query += ` AND leads.created_at BETWEEN '${startDate}' AND '${currentDate}'`;
        }
    
        if (state && state != 'null') {
            query += ` AND leads.leads_state = '${state}'`;
        }
    
        if (city && city != 'null') {
            query += ` AND leads.leads_city = '${city}'`;
        }
    
        query += " ORDER BY leads.reminder_date ASC";
    
        console.log("Query:", query);
    
        db.query(query, (getErr, getRes) => {
            if (getErr) {
                res.status(500).json({ message: "Internal Server Error. Could not fetch Employee Following Leads." });
                console.log("Error :", getErr)
            } else {
                res.status(200).json(getRes);
                console.log("Data :", getRes)
            }
        });
    });
    



    router.get('/empFollowLeadsForAdmin', (req, res) => {
        const { reminderDate, startDate, endDate, state, city, emp_id } = req.query;
        let query = `SELECT leads.*, emp.emp_name 
                     FROM following_leads leads 
                     INNER JOIN employee emp 
                     ON emp.emp_id = leads.emp_id`;
    
        if (emp_id && emp_id != 'null') {
            query += ` WHERE leads.emp_id = '${emp_id}'`;
        }
    
        if (reminderDate != 'null' && reminderDate !== undefined) {
            query += ` AND leads.reminder_date = '${reminderDate}'`;
        }
    
        if (startDate && endDate && endDate !='null') {
            query += ` AND leads.created_at BETWEEN '${startDate}' AND '${endDate}'`;
        }else if(startDate && startDate !='null'){
            const currentDate = moment().format('YYYY-MM-DD HH:mm:ss')
            query += ` AND leads.created_at BETWEEN '${startDate}' AND '${currentDate}'`;
        }
    
        if (state && state !='null') {
            query += ` AND leads.leads_state = '${state}'`;
        }
    
        if (city && city !='null') {
            query += ` AND leads.leads_city = '${city}'`;
        }
    
        query += " ORDER BY leads.reminder_date ASC";
    
        console.log("Query:", query);
    
        db.query(query, (getErr, getRes) => {
            if (getErr) {
                console.log("Error :", getErr);
                res.status(500).json({ message: "Internal Server Error. Could not fetch Employee Following Leads." });
            } else {
                res.status(200).json(getRes);
                console.log("Data :", getRes);
            }
        });
    });
    
    
router.put('/updateFlwLeadForEmp/:id',(req,res)=>{
    try{
        const follow_id = req.params.id;
        const {
            leads_name,
            leads_mobile,
            leads_email,
            leads_company,
            leads_address,
            leads_state,
            leads_city,
            product_name,
            leads_query,
            remember,
            reminder_date
        } = req.body;
        const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const updateLeads = `
    UPDATE following_leads
    SET
        leads_name = ?,
        leads_mobile = ?,
        leads_email = ?,
        leads_company = ?,
        leads_address = ?,
        leads_state = ?,
        leads_city = ?,
        product_name = ?,
        leads_query = ?,
        remember = ?,
        reminder_date = ?,
        updated_at = ?
    WHERE
        follow_id = ?
`;

            const params = [
                leads_name ?? null,
                leads_mobile ?? null,
                leads_email ?? null,
                leads_company ?? null,
                leads_address ?? null,
                leads_state ?? null,
                leads_city ?? null,
                product_name ?? null,
                leads_query ?? null,
                remember ?? null,
                reminder_date ?? null,
                currentDate,
                follow_id
            ];
            db.query(updateLeads,params,(updateErr,updateRes)=>{
                if(updateErr){
                    res.status(500).json({message:"Internal server error."})
                    console.log("Error :",updateErr)
                }else{
                    res.status(200).json({message:"Leads Data updated successfully."})
                }
            })
    }catch(error){
        res.status(500).json({message :"Internal server error."})
    }
})


    
    router.get('/leadsCountForDashboard',(req,res)=>{
        const currentDate = moment().format("YYYY-MM-DD");
        const getData = `
        SELECT COUNT(CASE WHEN reminder_date = '${currentDate}' THEN 1 END) AS reminder_date_count,
        COUNT(CASE WHEN DATE(created_at) = '${currentDate}' THEN 1 END) AS created_at_count FROM 
        following_leads`;
        db.query(getData,(getErr,getRes)=>{
            if(getErr){
                res.status(500).json({message:"Internal server error."})
            }else if(getRes.length === 0){
                res.status(404).json({message:"Data not fount."})
            }
            else{
                res.status(200).json(getRes[0])
            }
        })
    })
    


    router.get('/leadsCountForEmpDashboard/:empId', (req, res) => {
        const empId = req.params.empId;
        const currentDate = moment().format("YYYY-MM-DD");
        const getData = `
            SELECT 
                COUNT(CASE WHEN reminder_date = '${currentDate}' THEN 1 END) AS reminder_date_count,
                COUNT(CASE WHEN DATE(created_at) = '${currentDate}' THEN 1 END) AS created_at_count 
            FROM 
                following_leads
            WHERE 
                emp_id = '${empId}'`;
    
        db.query(getData, (getErr, getRes) => {
            if (getErr) {
                res.status(500).json({ message: "Internal server error." });
            } else if (getRes.length === 0) {
                res.status(404).json({ message: "Data not found." });
            } else {
                res.status(200).json(getRes[0]);
            }
        });
    });
    
    
    

    return router;
}