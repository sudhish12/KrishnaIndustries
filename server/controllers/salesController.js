const express = require('express');
const router = express.Router();
const moment = require('moment');

module.exports = (db, storage) => {


    router.get('/getSale',(req,res)=>{
       try{
        const getData = 'select sale.*,pro.pro_name from sales sale inner join products pro on sale.pro_id = pro.pro_id';
        db.query(getData,(getErr,getRes)=>{
            if(getErr){
                res.status(500).json({message:"Internal server error.could not be fetched Sale data."})
            } else if(getRes.length === 0){
                res.status(404).json({message:"Purchase Data Not Found"})
            }else{
                res.status(200).json(getRes)
            }
        })
       }catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ message: "Internal server error." });
      }
    })


    router.post('/saveSales',(req,res)=>{
        try{
            const {pro_id,sale_address,quantity,price,gst,total} = req.body;
        const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const saveData = 'insert into sales(pro_id,sale_address,quantity,price,gst,total,created_at) values(?,?,?,?,?,?,?)';
        db.query(saveData,[pro_id,sale_address,quantity,price,gst,total,currentDate],(saveErr,saveRes)=>{
            if(saveErr){
                res.status(500).json({message:"Internal server error."})
                console.log("Error :",saveErr)
            }else{
                res.status(200).json({message:"Sales Data added successfully."})
            }
        })
        }catch (error) {
            console.error("Error processing request:", error);
            res.status(500).json({ message: "Internal server error." });
          }
    })

    router.put('/update/:id',(req,res)=>{
        try{
            const sale_id = req.params.id;
        const {pro_id,sale_address,quantity,price,gst,total} = req.body;
        const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
        const updateData = 'update sales set pro_id = ?,sale_address = ?,quantity = ?,price = ?,gst = ?,total = ?,updated_at = ? where sale_id = ?';
        db.query(updateData,[pro_id,sale_address,quantity,price,gst,total,currentDate,sale_id],(updateErr,updateRes)=>{
            if(updateErr){
                res.status(500).json({message:"Internal server error."})
                console.log("Error :",updateErr)
            }else{
                res.status(200).json({message:"Sales Data is not updated."})
            }
        })
        }catch (error) {
            console.error("Error processing request:", error);
            res.status(500).json({ message: "Internal server error." });
          }

    })

    router.delete('/delete/:id',(req,res)=>{
        try{
            const sale_id = req.params.id;
        const dltData = 'delete from sales where sale_id=?';
        db.query(dltData,[sale_id],(dltErr,dltRes)=>{
            if(dltErr){
                res.status(500).json({message:"Internal server error."})
            }else{
                res.status(200).json({message:"Sales Data deleted successfully."})
            }
        })
        }catch (error) {
            console.error("Error processing request:", error);
            res.status(500).json({ message: "Internal server error." });
          }
    })

    return router;
}