import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose, { Schema, mongo } from "mongoose";
import { strict } from "assert";




const app = express() ;
const port =5050;
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
const __dirname = dirname(fileURLToPath(import.meta.url))

app.get("/",(req,res) => {
    res.render('index.ejs',{blog_titles:titles})
})
const titles =["day-1","day-2","day-3"];
app.get("/contact",(req,res)=>{
    res.render('contact.ejs')
})

app.get("/addblogs",(req,res)=>{
    res.render('addblogs.ejs'),{
        blog_title:'sheela ki javani'

    }})

app.post("/addblogs",(req,res) => {
    console.log(req.body.Title)
    res.render('addblogs.ejs',{receive:true})
    titles.push(req.body.Title)
    
})

app.listen(port,() => {
    console.log('Listening on port 5050')
}
)









// mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB')


// const FruitScema= new Schema({
//     name:String,
//     rating:Number,
//     review:String
// })

// const Fruit = mongoose.model("Fruit", FruitScema);
// const fruit1=new Fruit({
//     name:"Apple",
//     rating:9.9,
//     review:"chummah"
// })

// fruit1.save();






















// import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/FruatsDB");

const FruitScema = new Schema({
    name:String ,
    rating:Number,
    price:Number
})


const Fruit = mongoose.model("Fruit",FruitScema);

const fruit1= new Fruit({
    name:"Banana",
    rating:9.0,
    price:45 
})

// fruit1.save()




const PersonScema=new Schema({
    name:String,
    rel:String,
    age:Number
})


const Person = mongoose.model("Poples",PersonScema);

const p1 = new Person ({
    name:"Ayaan",
    rel:"No",
    age:19
});

p1.save()
