const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./mongodb")
const bodyParser=require('body-parser')

app.use(express.static('public1'))
// const tempelatePath=path.join(__dirname,'../tempelates')
app.use(express.json())
app.set("view engine","hbs")
//  app.set("views",tempelatePath)
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.render("loginvid")
})

app.get("/signupvid",(req,res)=>{
    res.render("signupvid")
})

app.get("/store",(req,res)=>{
    res.render("store")
})

app.get("/faq",(req,res)=>{
    res.render("faq")
})

app.get("/About-us",(req,res)=>{
    res.render("About-us")
})

app.get("/contacts",(req,res)=>{
    res.render("contacts")
})

app.get("/curly",(req,res)=>{
    res.render("curly")
})


app.get("/curly1",(req,res)=>{
    res.render("curly1")
})


app.get("/curly2",(req,res)=>{
    res.render("curly2")
})


app.get("/profile",(req,res)=>{
    res.render("profile")
})


app.get("/quiz",(req,res)=>{
    res.render("quiz")
})

app.get("/hair_t",(req,res)=>{
    res.render("hair_t")
})



app.post("/signupvid",async (req,res)=>{
    
    const data={
        name:req.body.name,
        password:req.body.password
    }

    await collection.insertMany([data])

    res.render("welcome")
})

app.post("/loginvid",async (req,res)=>{
    try{
          const check=await collection.findOne({name:req.body.name})

          if(check.password==req.body.password){
            res.render("welcome")
          }
          else{
            res.send("wrong password")
          }
    }
    catch{
            res.send("wrong details")
    }

   
})


app.listen(5000,()=>{
    console.log("port connected");
})