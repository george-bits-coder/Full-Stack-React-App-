import React from 'react';

function Details(props){
const n=props.name;
const p=props.pay;
const toggleshd=props.toggleshd;
var ar=[];

for(let i=0;i<p.length;i++){
    var temp=p[i].split("-");
    ar.push(temp);
}
return(
    <div style={{marginLeft:"40%",marginTop:"5%"}}>
    
<div style={{border:"1px solid blue",width:"400px",textAlign:"center",height:"50px",paddingTop:"30px"}}>Payment details of {n}  </div>
{ar.map((e)=>(
    <>
    <button style={{height:"200px",width:"400px"}}> <button style={{width:"100px"}}>Year {e[1]}</button> <button  style={{width:"100px"}}>Month {e[0]}</button> <button  style={{width:"100px"}}>Amount {e[2]}</button></button>
    <div></div>
    
    </>
    ))}
     <button style={{marginLeft:"350px"}}onClick={toggleshd}>Back</button>
    </div>
)

}

export default Details;
