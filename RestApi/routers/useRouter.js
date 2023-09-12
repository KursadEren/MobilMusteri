import express from 'express'
import postgresClient from '../config/db.js';
const router = express.Router();
router.get('/',async (req,res) =>{
   
        const text = "SELECT * FROM  kullanici "
        const result = await postgresClient.query(text)
        return res.status(200).json(result.rows)
        
   
})



export default router;