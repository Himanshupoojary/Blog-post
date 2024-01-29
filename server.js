import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import mongoose, { Schema, mongo } from "mongoose";
import { strict } from "assert";
import bodyParser from "body-parser";
import dotenv from "dotenv"


dotenv.config()
const app = express() ;
const port =process.env.PORT || 5050;
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
const __dirname = dirname(fileURLToPath(import.meta.url))
const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD



mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.izhprbz.mongodb.net/registrationformDB`)


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


const regscema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Registration = mongoose.model("Regsitration",regscema)

app.get("/success",(req,res)=>{
    res.sendFile(__dirname + "/views/success.html")
})

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

app.post("/register",(req,res)=>{
   try {
    const {name1 , email1 , password1} = req.body
    const RegistrationDat=new Registration( {
        name:name1,
        email:email1,
        password:password1
    })
    // await RegistrationDat.save()
    res.sendFile(__dirname +"/views/success.html")

   } catch (error) {
    res.sendFile(__dirname +"/views/error.html")
    
   }
// res.redirect("/success")
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



// // import mongoose from "mongoose";

// mongoose.connect("mongodb://127.0.0.1:27017/FruatsDB");

// const FruitScema = new Schema({
//     name:String ,
//     rating:Number,
//     price:Number
// })


// const Fruit = mongoose.model("Fruit",FruitScema);

// const fruit3= new Fruit({
//     name:"litchi",
//     rating:9.0,
//     price:45 
// })

// fruit3.save()




// const PersonScema=new Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     rel:String,
//     age:Number,
//     fav:FruitScema
// })


// const Person = mongoose.model("Poples",PersonScema);

// const p1 = new Person ({
//    name:"mikal",
//     rel:"No",
//     age:40,
//     fav:fruit3
// });
// // const p2 = new Person ({
// //     name:"mike",
// //     rel:"No",
// //     age:40
// // });

// // const p3 = new Person ({
// //     name:"mike",
// //     rel:"No",
// //     age:40
// // });


// // const p4 = new Person ({
// //     name:"mike",
// //     rel:"No",
// //     age:40
// // });

// // const p5 = new Person ({
// //     name:"mike",
// //     rel:"No",
// //     age:40
// // });



// // Person.insertMany([p1,p2,p3,p4,p5])

// p1.save()

// // console.log(Person.find({name:"Ayaan"},(err)=>{}))
// const kit = await Person.find()
// // mongoose.connection.close();
// console.log(kit.forEach(function(pople){
//     console.log(pople.name);
    
// }));



// const name= await Person.updateOne({name:"Macal"}, {name:"lassun"})





// const res = await Person.updateOne({_id:"65b3cb7bc5af7ef551ce8284" }, {name:"Lassun"});
// res.matchedCount; // Number of documents matched
// res.modifiedCount; // Number of documents modified
// res.acknowledged; // Boolean indicating everything went smoothly.
// res.upsertedId; // null or an id containing a document that had to be upserted.
// res.upsertedCount; // Number indicating how many documents had to be upserted. Will either be 0 or 1.


// await Person.deleteMany({name:"mike"})
 






