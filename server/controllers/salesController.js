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

    //total sales
    router.get('/totalSalesAmount', (req, res) => {
        try {
            const { filterType } = req.query; // "day", "month", or "year"
            let query = '';
            const currentDate = moment();
            
            if (filterType === 'day') {
                query = `SELECT SUM(total) AS totalPurchaseAmount FROM sales WHERE DATE(created_at) = ?`;
                const dayStart = currentDate.startOf('day').format('YYYY-MM-DD');
                db.query(query, [dayStart], (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: "Internal server error." });
                    }
                    res.status(200).json(result[0]);
                });
            } else if (filterType === 'month') {
                query = `SELECT SUM(total) AS totalPurchaseAmount FROM sales WHERE MONTH(created_at) = ? AND YEAR(created_at) = ?`;
                const month = currentDate.format('MM');
                const year = currentDate.format('YYYY');
                db.query(query, [month, year], (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: "Internal server error." });
                    }
                    res.status(200).json(result[0]);
                });
            } else if (filterType === 'year') {
                query = `SELECT SUM(total) AS totalPurchaseAmount FROM sales WHERE YEAR(created_at) = ?`;
                const year = currentDate.format('YYYY');
                db.query(query, [year], (err, result) => {
                    if (err) {
                        return res.status(500).json({ message: "Internal server error." });
                    }
                    res.status(200).json(result[0]);
                });
            } else {
                res.status(400).json({ message: "Invalid filter type. Please use 'day', 'month', or 'year'." });
            }
        } catch (error) {
            console.error("Error processing request:", error);
            res.status(500).json({ message: "Internal server error." });
        }
    });

    
//profit calculation
router.get('/profit', (req, res) => {
    const { filter } = req.query;

    let profitQuery;
    let queryParams = [];

    if (filter === 'days') {
        // Profit by days in the current month
        const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
        const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
        profitQuery = `
            SELECT
                DATE(s.created_at) AS date,
                (IFNULL(SUM(s.total), 0) - IFNULL(SUM(p.total), 0)) AS profit
            FROM
                sales s
                LEFT JOIN cust_purch_logs p ON DATE(s.created_at) = DATE(p.created_at)
            WHERE
                DATE(s.created_at) BETWEEN ? AND ?
            GROUP BY
                DATE(s.created_at)
            ORDER BY
                DATE(s.created_at)
        `;
        queryParams.push(startOfMonth, endOfMonth);
    } else if (filter === 'months') {
        // Profit by months in the current year
        const startOfYear = moment().startOf('year').format('YYYY-MM-DD');
        const endOfYear = moment().endOf('year').format('YYYY-MM-DD');
        profitQuery = `
            SELECT
                MONTH(s.created_at) AS month,
                (IFNULL(SUM(s.total), 0) - IFNULL(SUM(p.total), 0)) AS profit
            FROM
                sales s
                LEFT JOIN cust_purch_logs p ON MONTH(s.created_at) = MONTH(p.created_at) AND YEAR(s.created_at) = YEAR(p.created_at)
            WHERE
                DATE(s.created_at) BETWEEN ? AND ?
            GROUP BY
                MONTH(s.created_at)
            ORDER BY
                MONTH(s.created_at)
        `;
        queryParams.push(startOfYear, endOfYear);
    } else if (filter === 'years') {
        // Profit by years
        profitQuery = `
            SELECT
                YEAR(s.created_at) AS year,
                (IFNULL(SUM(s.total), 0) - IFNULL(SUM(p.total), 0)) AS profit
            FROM
                sales s
                LEFT JOIN cust_purch_logs p ON YEAR(s.created_at) = YEAR(p.created_at)
            GROUP BY
                YEAR(s.created_at)
            ORDER BY
                YEAR(s.created_at)
        `;
    } else {
        return res.status(400).json({ message: "Invalid filter parameter. Use 'days', 'months', or 'years'." });
    }

    db.query(profitQuery, queryParams, (err, result) => {
        if (err) {
            res.status(500).json({ message: "Internal server error." });
        } else if (result.length === 0) {
            res.status(404).json({ message: "Data not found." });
        } else {
            res.status(200).json(result);
        }
    });
});





return router;
}
