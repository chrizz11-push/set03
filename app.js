require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req,res) => {
     res.write("server is ready")
     
     res.end();
})

app.listen(port, () => {
    console.log(`server is listening to:${port}`);
})