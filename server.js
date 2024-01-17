import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";


const app = express() ;
const port =5050;
app.use(express.static('public'));


app.get("/",(req,res) => {
    res.render('index.ejs')
})

app.listen(port,() => {
    console.log('Listening on port 5050')
}
)