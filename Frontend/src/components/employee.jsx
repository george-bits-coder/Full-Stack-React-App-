import React from "react";

function Employee(props){

const img=props.image;
const nam=props.name;
const dep=props.dep;
const gen=props.gen;
const total=props.tot;
const pay=props.pay;
const dat1=props.dat;
const dat=dat1.split("T")[0]
const toggleshd=props.toggleshd;
const setDname=props.setDname;
const setDpay=props.setDpay
const rundetails=()=>{ 
    setDname(nam);
    setDpay(pay)
    toggleshd()
}
return(
<div style={{margin:"1%"}}>
<div style={{display:"flex",marginLeft:"20%",marginRight:"20%",border:"1px solid blue"}}>
<div>
<img onClick={()=>{rundetails() }} src={img} style={{height:"150px",width:"150px",objectFit:"cover",marginBottom:"0px",cursor:"pointer"}}/>
<div style={{color:"white",backgroundColor:"black",marginTop:"-4px"}}>{nam}</div>
</div>
<div style={{marginLeft:"5%",marginTop:"5%",textAlign:"left"}}>

<div>Department: {dep}</div>
<div>Gender: {gen} </div>

<div>Joining date : {dat} </div>

</div>

<div style={{marginTop:"8%",marginLeft:"12%"}}>Total Amount paid: {total}</div>
</div>





</div>
)




}


export default Employee;
