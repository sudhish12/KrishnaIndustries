const express = require('express');
const router = express.Router();
const moment = require('moment');
const axios = require('axios');

module.exports = (db,transporter) =>{

  router.get('/',(req,res)=>{
    const getData = 'select emp.*,role.role,dept.dept_name,lang.language_name from employee emp inner join department dept on emp.dept_id = dept.dept_id inner join role role on emp.role_id = role.role_id inner join languages lang on emp.lang_id = lang.lang_id';
    db.query(getData,(err,result)=>{
      if(err){
        res.status(500).json({message:"Internal server error."});
      }else if(result.length === 0){
        res.status(404).json({message:"Employee Data not found."});
      }else{
        res.status(200).json(result)
      }
    })
  })

  router.post('/saveEmp', (req, res) => {
    const { dept_id, role_id, lang_id, emp_name, emp_email, emp_mobile, state, dist, city, hire_date } = req.body;

    if (!dept_id || !role_id || !lang_id || !emp_name || !emp_email || !emp_mobile || !state || !dist || !city || !hire_date) {
        return res.status(400).json({ message: "All fields are required" });
    }
    const thankingMsg = "Thank you for joining our company! We are thrilled to have you on board.";
    const credentialsMsg = `Your username is: ${emp_email} \n Your password is: ${emp_mobile}`;

    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const saveData = 'insert into employee(dept_id,role_id,lang_id,emp_name,emp_email,emp_mobile,state,dist,city,hire_date,created_at) values(?,?,?,?,?,?,?,?,?,?,?)';
    db.query(saveData, [dept_id,role_id,lang_id,emp_name,emp_email,emp_mobile,state,dist,city,hire_date,currentDate], (err, results) => {
        if (err) {
            console.error("Error saving employee data:", err);
            return res.status(500).json({ message: "Internal server error." });
        } else {
            console.log("Employee data added successfully.");
            const empMail = transporter.sendMail({
              from: "asglobalsofttech@gmail.com",
              to: emp_email,
              subject: "Employee Credentials",
              html: `<h1>Hello ${emp_name},</h1>
              <p>${thankingMsg}</p>
              <p>${credentialsMsg}</p>`
          });
          
          empMail.then(() => {
              console.log("Email sent successfully.");
          }).catch((error) => {
              console.error("Error sending email:", error);
          });
          
            return res.status(200).json({ message: "Employee data added successfully." });
        }
    });
});

  router.put('/update/:id',(req,res)=>{
    const emp_id = req.params.id;
    console.log("Employee Id :",emp_id)
    const {dept_id,role_id,lang_id,emp_name,emp_email,emp_mobile,state,dist,city,hire_date} = req.body;
    console.log("Employee Data :",dept_id,role_id,lang_id,emp_name,emp_email,emp_mobile,state,dist,city,hire_date)
    if(!dept_id || !role_id || !lang_id || !emp_name || !emp_email || !emp_mobile || !state || !dist || !city || !hire_date){
      console.log("All field are required")
    }
    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    const updateData = 'update employee set dept_id=?,role_id=?,lang_id=?,emp_name=?,emp_email=?,emp_mobile=?,state=?,dist=?,city=?,hire_date=?,updated_at=? where emp_id=?';
    db.query(updateData,[dept_id,role_id,lang_id,emp_name,emp_email,emp_mobile,state,dist,city,hire_date,currentDate,emp_id],(err,result)=>{
      if(err){
        res.status(500).json({message:"Internal server error."})
        console.log("Employee Data is not updated :",err)
      }else{
        res.status(200).json({message:"Employee Data Updated successfully."})
      }
    })
  })


  router.delete('/delete/:id',(req,res)=>{
    const emp_id = req.params.id;
    const dltData = 'delete from employee where emp_id = ?';
    db.query(dltData,[emp_id],(err,result)=>{
      if(err){
        res.status(500).json({message:"Internal server error."})
      }else{
        res.status(200).json({message:"Employee Data Deleted successfully."})
      }
    })
  })

  return router;
}