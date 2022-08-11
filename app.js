const express = require('express');
const bodyParser = require('body-parser');
const date=require(__dirname +"/date.js");
console.log(date);
let ejs = require('ejs');
const app=express();
var items=["Eating snacks","Studying","Evening Walk","Watching movie"];
let workitems=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




app.get("/",function(req,res){

  let day=date.getDate();


  res.render("list",{ListTitle:day, newListItems:items});
});

app.post("/",function(req,res){
  let item=req.body.newItem;
    if(req.body.list==="Work"){
     workitems.push(item);
     res.redirect("/work");
}
else {
  items.push(item);
  res.redirect("/");
}



});
app.get("/work",function(req,res){
    res.render("list",{ListTitle:"Work List",newListItems:workitems});
});

app.post("/work",function(req,res){
  let item=req.body.newItem;
  workitems.push(item);
  res.redirect("/work");
})





app.listen(3030,function(){
  console.log("Server is running at port 3030");
})
