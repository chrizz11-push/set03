require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

const studentData = [
    {id: 1, name:"Tuface", course:"Backend"},
    {id: 2, name:"Simi", course:"Full Stack"},
    {id: 3, name:"Wizkid", course:"Backend"},
    {id: 4, name:"Davido", course:"Full Stack"},
    {id: 5, name:"Skales", course:"Frontend"}
]

// default route
app.get("/", (req,res) => {
    console.log("Student API")
    res.send("Welcome to student API")
})

// get all students
app.get("/api/students", (req, res)=>{
    if(!studentData){
        res.status(400).send("No data availabel")
    }else{
        console.log({studentData})
        res.status(200).json({studentData})
    }
})

// create a student
app.post("/api/students", (req, res)=>{
    if(!studentData){
        console.log("no collection as such")
    }
    const newStudent = {
        id: studentData.length + 1,
        name : req.body.name,
        course: req.body.course
    }
    studentData.push(newStudent);
    res.status(200).json({message: "student created", data: studentData})
    // res.status(200).json({studentData})
});

// get a student
app.get("/api/students/:id", (req, res)=>{
    const studentId = studentData.find((stud)=>stud.id === parseInt(req.params.id));
    if(!studentId){
        console.log(`no user with this id: ${req.params.id}`)
    }
    res.status(200).json({message: `student id: ${req.params.id}`, data: studentId})
});

// update a student


app.listen(port, () => {
    console.log(`server is listening to:${port}`);
})