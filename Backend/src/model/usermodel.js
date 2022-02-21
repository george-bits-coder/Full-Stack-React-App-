const mongoose = require("mongoose");

const employeeSchema=new mongoose.Schema({


    Name:{type:String,required:true},
    imageuri:{type:String},
    Department:{type:String,required:true},
    Gender:{type:String,required:true},
    Joindate:{type:Date,required:true},
    Payment:[{
        type:String,required:true    //"month-year-amount"
    }],
    Totalamount:{type:Number,required:true}
},{
    versionKey:false
});


module.exports=mongoose.model("employee",employeeSchema)
