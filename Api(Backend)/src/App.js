const express = require("express");
const app = express();
const cors=require("cors");
app.use(cors({origin:"*",}))
const PORT = process.env.PORT || 2345;
const connect = require("./config/db.js");

const Emp = require("./model/usermodel.js");
app.get("/search/:user",async(req,res)=>{

try{
const username=req.params.user;

const result=await Emp.findOne({Name:username}).lean().exec();
res.send(result)
}
catch{
  res.send("error");
}


})
app.get("/getdata", async (req, res) => {
  try {
    var size=req.query.size;
    var page=req.query.page;
    var num=(page-1)*size;
    var gf=req.query.gf;
    var df=req.query.df;
    var jdf=req.query.jdf;
    var k=1;
    if(jdf){
      if(jdf.includes("newcomers"))
      k=-1;
      else
      k=1;
    }
    var talk;
    var count;
    if(df&&gf&&jdf)
    { talk = await Emp.find({$and:[{Gender:gf},{Department:df}]}).sort({Joindate:k}).limit(size).skip(num);
      count=await Emp.find({$and:[{Gender:gf},{Department:df}]}).count();
  }
    else if(df&&gf)
     { 
       talk = await Emp.find({$and:[{Gender:gf},{Department:df}]}).limit(size).skip(num);
       count=await Emp.find({$and:[{Gender:gf},{Department:df}]}).count();
     }
    else if(gf&&jdf)
    { talk = await Emp.find({Gender:gf}).sort({Joindate:k}).limit(size).skip(num);
    count=await Emp.find({Gender:gf}).count();
    }
    else if(df&&jdf)
     { 
       talk = await Emp.find({Department:df}).sort({Joindate:k}).limit(size).skip(num);
       count=await Emp.find({Department:df}).count();
     }
    else if(df)
     { 
       talk = await Emp.find({Department:df}).limit(size).skip(num);
       count=await Emp.find({Department:df}).count();
     }
    else if(gf)
     {
       talk = await Emp.find({Gender:gf}).limit(size).skip(num);
       count=await Emp.find({Gender:gf}).count();
     }
    else if(jdf)
    { talk = await Emp.find().sort({Joindate:k}).limit(size).skip(num);
    count=await Emp.find().count();
    }
    else
    { talk = await Emp.find().limit(size).skip(num);
      count=await Emp.find().count();
    }
     //const count=talk.count();
    res.send({result:talk,counts:count});
  } catch {
    res.send("error");
  }
});

app.get("/", (req, res) => {
  res.send("hi this is cool");
});

app.listen(PORT, async () => {
  await connect();
  console.log("listening...");
});
