const express = require("express"); 
const router = express.Router();






router.get('/', (req,res)=>{
    res.render("index")
})

router.get('/gallery', (req,res)=>{
    res.render("gallery")
})

router.get('/about-us', (req,res)=>{
    res.render("about")
})

router.get('/onboard/club-de-star-cooperative', (req,res)=>{
    res.render("auth")
})

router.get('/club-de-star-cooperative/user-dashboard', (req,res)=>{
    res.render("dashboard/user-dashboard")
})

router.post("/api/register", (req, res) => {
  console.log("🟢 Incoming Registration Data:");
  console.log("Body:", req.body);  // Now you'll see JSON data
  console.log("Files:", req.files); // Will be undefined (no files)

  res.json({ success: true, message: "Data received successfully" });
});






module.exports = router;