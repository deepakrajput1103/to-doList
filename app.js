const express = require("express");
const bodyParser=require("body-parser");

const app=express();
 
var items=["Buy Food","Cook Food","Eat Food"];

app.set('view engine', 'ejs');//Its is the method to use EJS is our file

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    var today = new Date();

    // var currentday = today.getDay();
    // var day="";

    // if(currentday===6||currentday===0){
    //     day="Weekend";
    // }
    // else{
    //    day="weekday";
    // }

    //
    // switch(currentday){
    //     case 0:
    //         day="sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    //     default:
    //         console.log("There is something error!");
    // }

    var option={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
     var day = today.toLocaleDateString("en-US",option);

    res.render("list",{kindofDay:day,newListItems:items});
});

app.post("/",function(req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(1200,function(){
    console.log("server is running at port 1200");
})