
import './App.css';
import Employee from "./components/employee";
import Details from "./components/details";
import {useEffect,useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SearchField from "react-search-field";
function App() {

  const options = [
   'No filter' ,'HR', 'Sales', 'Engineering'
  ];
  const defaultOption = options[0];

  const [obj,setObj]=useState({});
  const [val,setVal]=useState([]);
  const [shd,setShd]=useState(false);
  const [dname,setDname]=useState("");
   const[dpay,setDpay]=useState("");
  const [gf,setGf]=useState("");
  const [df,setDf]=useState("");
  const [jdf,setJdf]=useState("");  
  const [total,setTotal]=useState([])

  const toggleshd=()=>{
    if(shd==true)
    setShd(false);
    else
    setShd(true)
  }
useEffect(() => {

  getitems(1);
},[gf,df,jdf])
const getoneitem=()=>{
  getitems(1);
}

const getitems=(num)=>{
  console.log(df,gf,jdf)
fetch(`https://george-api-employees.herokuapp.com/getdata?size=3&page=${num}&gf=${gf}&df=${df}&jdf=${jdf}`)
.then(res=>res.json()).then((res)=>{
//setObj(res)

setVal(res["result"]);
var t=Math.floor(res["counts"]/3);
if(t==0)
t=1;
var ar=[];
for(let i=0;i<t;i++){
ar.push(i+1)
}
setTotal(ar)
console.log("hello")
//console.log(val);
//console.log(obj)
})
}
const options1 = [
  'No filter' ,'male', 'female'
 ];
 const defaultOption1 = options1[0];

 const options2 = [
  'No sorting' ,'Show newcomers first', 'Show most experienced first'
 ];
 const defaultOption2 = options2[0];
const dff=(option)=>{
  console.log(option.label)
  if(option.label==="No filter")
  setDf("")
  else
setDf(option.label)
//getitems(1);
}
const gff=(option)=>{
  console.log(option.label)
  if(option.label=="No filter")
  setGf("")
  else
setGf(option.label)
console.log("hi")
//getitems(1);
}
const dosearch=(value)=>{
//alert(value)

fetch(`https://george-api-employees.herokuapp.com/search/${value}`).then((res)=>res.json())
.then((res)=>{
  setVal([res]);
  //setTotal([1])
}).catch((err)=>{
  alert(`User ${value} not found in directory.Check spelling or try again`)
})

}
const jff=(option)=>{
  console.log(option.label)
  if(option.label=="No sorting")
  setJdf("")
else
  setJdf(option.label)
//getitems(1);
}
if(!shd)
  return (
    <div className="App" >
      
<div style={{marginLeft:"48%"}}><SearchField
  placeholder="Search Employees"
  onChange={()=>{}}
  onSearchClick={dosearch}
/></div>
<div style={{display:"flex", marginLeft:"22%"}}>
<label style={{marginRight:"1%",marginTop:"0.5%"}}>Department  </label> 
<Dropdown options={options}  onChange={dff}value={defaultOption} placeholder="Select an option" />
<label style={{marginRight:"1%",marginTop:"0.5%",marginLeft:"2%"}}>Gender </label> 
<Dropdown options={options1} onChange={gff} value={defaultOption1} placeholder="Select an option" />
<label style={{marginRight:"1%",marginTop:"0.5%",marginLeft:"2%"}}>Sort by joining date </label> 
<Dropdown options={options2} onChange={jff} value={defaultOption2} placeholder="Select an option" />
<span style={{marginRight:"1%"}}></span>


</div>
      {val.map((e)=>(
                   <Employee setDname={setDname} setDpay={setDpay} shd={shd} toggleshd={toggleshd} setShd={setShd} image={e.imageuri} name={e.Name} dep={e.Department} gen={e.Gender} tot={e.Totalamount} pay={e.Payment} dat={e.Joindate}  />
      ))}
      

      <div>
      {total.map((e)=>( <button onClick={()=>{getitems(e)}}>{e}</button>))}
      
      </div>
    </div>
  );
 else{
   return (
     <div>
       
       <Details name={dname} pay={dpay} toggleshd={toggleshd}/>
     </div>
   )
 }
}

export default App;
