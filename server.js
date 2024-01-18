import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";


const app = express() ;
const port =5050;
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get("/",(req,res) => {
    res.render('index.ejs')
})

app.get("/contact",(req,res)=>{
    res.render('contact.ejs')
})

app.get("/addblogs",(req,res)=>{
    res.render('addblogs.ejs'),{
        blog_title:'sheela ki javani'

    }})

app.post("/addblogs",(req,res) => {
    console.log(req.body)
    res.render('addblogs.ejs',{receive:true})
    
})

app.listen(port,() => {
    console.log('Listening on port 5050')
}
)