// express_form_turorial_v1
//  fallowing a book called web development with node & express by ethan brown
//by wisemonkey
// 20200301

//this is the main server

import express from 'express';
import bodyParser from 'body-parser';
import handler from "./routes/handler"

const PORT = 3000


const app = express()

app.use(express.static("web"))
//needed to turn a <input ...name="username" ..../> into req.body.username

app.use(bodyParser.json())

const signup = (req,res)=>{
    console.count("form")
    console.log(`form request: ${JSON.stringify(req.body)}`)
    console.log(`form request: ${req.body.username}`)
    res.send({ result:"success"})
}
app.post('/api/signup', signup)

//-------------------------------------------------
console.log("Demo Express forms server has started")

app.listen(PORT, ()=>{
    console.log(`Server is running: http://localhost:${PORT}`);
});
