const express = require('express');
const router = express.Router();
const moment = require('moment');

module.exports = (db) =>{


    router.get('/getPurchase',(req,res)=>{
        const getData = 'select * from purchase';
        db.query(getData,(getErr,getRes)=>{
            if(getErr){
                res.status(500).json({message:"Internal server error.could not be fetched purchase data."})
            } else if(getRes.length === 0){
                res.status(404).json({message:"Purchase Data Not Found"})
            }else{
                res.status(200).json(getRes)
            }
        })
    })

    router.post('/savePurchase',(req,res)=>{
        const {pro_name,specification,purch_address,quantity,price,total,gst} = req.body;
        const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const saveData = 'insert into purchase(pro_name,specification,purch_address,quantity,price,total,gst,created_at) values(?,?,?,?,?,?,?,?)';
        db.query(saveData,[pro_name,specification,purch_address,quantity,price,total,gst,currentDate],(saveErr,saveRes)=>{
            if(saveErr){
                res.status(500).json({message:"Internal server error."})
                console.log("Error :",saveErr)
            }else{
                res.status(200).json({message:"Purchase Data added successfully."})
            }
        })
    })

    router.put('/update/:id',(req,res)=>{
        const purch_id = req.params.id;
        const {pro_name,specification,purch_address,quantity,price,total,gst} = req.body;
        const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const updateData = 'update purchase set pro_name = ?,specification = ?,purch_address = ?,quantity = ?,price = ?,total = ?,gst=?,updated_at = ? where purch_id = ?';
        db.query(updateData,[pro_name,specification,purch_address,quantity,price,total,gst,currentDate,purch_id],(updateErr,updateRes)=>{
            if(updateErr){
                res.status(500).json({message:"Internal server error."})
                console.log("Error :",updateErr)
            }else{
                res.status(200).json({message:"Purchase Data is not updated."})
            }
        })

    })

    router.delete('/delete/:id',(req,res)=>{
        const purch_id = req.params.id;
        const dltData = 'delete from purchase where purch_id=?';
        db.query(dltData,[purch_id],(dltErr,dltRes)=>{
            if(dltErr){
                res.status(500).json({message:"Internal server error."})
            }else{
                res.status(200).json({message:"Purchase Data deleted successfully."})
            }
        })
    })

    return router;
}