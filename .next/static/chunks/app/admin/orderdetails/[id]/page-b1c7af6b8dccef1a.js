(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1347],{6386:function(e,t,s){Promise.resolve().then(s.bind(s,6139))},6139:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return page}});var n=s(7437);s(73);var r=s(2265),i=s(9050),l=s(3226),x=s(4982),o=s(8874),c=s(9872),a=s(4081),d=s(819),h=s(657),p=s(4142),g=s(209),j=s(9222);let m={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{lg:550,md:550,sm:450,xs:400},borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"};var components_ChangeOrderStatus=e=>{let{open:t,setOpen:s,orderdetail:Z,fetchData:f}=e,[u,y]=(0,r.useState)([]),[b,S]=(0,r.useState)("");console.log("hello gthisdc",Z);let fetchOrderStatus=async()=>{let e=await j.Z.get("/api/orderstatus");y(e.data.resp)},handleEdit=async()=>{try{let e=await j.Z.patch("/api/orderstatus/".concat(Z._id),{orderStatus:b});"Order Status Successfully Updated"==e.data.message&&(s(!1),f())}catch(e){alert(e.message),console.log(e.message)}};return(0,r.useEffect)(()=>{S(Z.orderStatus),fetchOrderStatus()},[Z.orderStatus]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(x.Z,{open:t,disableAutoFocus:!0,onClose:()=>s(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",sx:{border:"2px solid white"},children:(0,n.jsx)(o.ZP,{container:!0,sx:m,children:(0,n.jsx)(o.ZP,{item:!0,lg:12,md:12,sm:10,xs:10,children:(0,n.jsxs)(c.Z,{elevation:5,sx:{borderRadius:"20px"},children:[(0,n.jsx)(o.ZP,{container:!0,children:(0,n.jsx)(o.ZP,{item:!0,xs:12,sx:{p:"10px",textAlign:"right"},children:(0,n.jsx)(g.Z,{sx:{color:"#635ac0",fontWeight:"bold",fontSize:"29px",cursor:"pointer"},onClick:()=>{s(!1)}})})}),(0,n.jsx)(o.ZP,{contaier:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:"20px"},children:(0,n.jsx)(o.ZP,{item:!0,xs:12,sx:{textAlign:"center",mt:"40px"},children:(0,n.jsx)(l.Z,{sx:{fontSize:"27px",color:"#635ac0",fontWeight:"800",fontFamily:"poppins,sans-serif"},children:"Change Order Status"})})}),(0,n.jsxs)(o.ZP,{container:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:"20px",pb:"70px"},children:[(0,n.jsx)(o.ZP,{item:!0,xs:6.1,sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:"20px"},children:(0,n.jsxs)(a.Z,{sx:{m:1,minWidth:200},size:"small",children:[(0,n.jsx)(d.Z,{id:"demo-select-small-label",children:"Order Status"}),(0,n.jsx)(h.Z,{labelId:"demo-select-small-label",id:"demo-select-small",value:b,label:"Order Status",onChange:e=>{S(e.target.value)},children:u.map((e,t)=>(0,n.jsx)(p.Z,{value:e,children:e},t))})]})}),(0,n.jsx)(o.ZP,{item:!0,xs:6.1,sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:"20px"},children:(0,n.jsx)(i.Z,{variant:"contained",disabled:b==Z.orderStatus,sx:{bgcolor:"#635ac0",width:"100%",fontSize:"13px",pt:"10px",pb:"10px",borderRadius:"10px",textTransform:"lowercase","&:hover":{bgcolor:"#635ac0"}},onClick:handleEdit,children:"Change"})})]})]})})})})})},Z=s(9245),f=s(1898),u=s(3701),y=s(6988),b=s(8489),S=s(666),w=s(9279),C=s(4033),page=()=>{let e=(0,C.useParams)(),[t,s]=(0,r.useState)({}),[x,a]=(0,r.useState)(!1),[d,h]=(0,r.useState)({skel:!0,noData:!1}),fetchData=async()=>{try{let t=await j.Z.get("/api/orderdetail/".concat(e.id));"Fetched Successfully"==t.data.message?(s(t.data.resp),h({...d,skel:!1,noData:!1})):h({...d,skel:!1,noData:!0})}catch(e){console.log(e)}};return(0,r.useEffect)(()=>{fetchData()},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.ZP,{container:!0,sx:{height:"80px",bgcolor:"black",alignItems:"center",width:"100%"},children:(0,n.jsx)(o.ZP,{item:!0,xs:4,children:(0,n.jsx)(l.Z,{sx:{fontSize:"30px",fontWeight:"900",color:"white"},children:"Admin DashBoard"})})}),(0,n.jsxs)(o.ZP,{container:!0,sx:{},children:[(0,n.jsx)(o.ZP,{item:!0,xs:12,children:(0,n.jsxs)(Z.Z,{sx:{p:"5px",pl:"10px",display:"flex",justifyContent:"right",alignItems:"flex-end",flexDirection:"column"},children:[(0,n.jsx)(l.Z,{sx:{fontSize:"25px",fontWeight:"900",color:"black",cursor:"pointer"},children:d.skel?(0,n.jsx)(f.Z,{sx:{width:"100px"}}):t.delAddress.receiverName+"order"}),(0,n.jsx)(l.Z,{sx:{color:"black",cursor:"pointer",mt:"-6px"},children:d.skel?(0,n.jsx)(f.Z,{sx:{width:"150px",mt:"3px"}}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{style:{fontSize:"18px",fontWeight:"900"},children:"Order Status :"}),"  ",(0,n.jsx)("span",{style:{fontSize:"15px",fontWeight:"400px"},children:t.orderStatus})]})})]})}),(0,n.jsxs)(o.ZP,{container:!0,sx:{justifyContent:"center",alignItems:"center",mt:"20px"},children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(l.Z,{align:"center",sx:{fontSize:"20px",fontWeight:"900"},children:"User Details"})}),(0,n.jsx)(o.ZP,{item:!0,xs:12,children:(0,n.jsx)(u.Z,{container:"true",component:c.Z,children:(0,n.jsxs)(u.Z,{"aria-label":"sticky table",children:[(0,n.jsx)(y.Z,{children:(0,n.jsxs)(b.Z,{sx:{bgcolor:"#616161"},children:[(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"S.N"}),(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Receiver Name"}),(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Delivery Address :"}),(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Receiver Mobile.No :"}),(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Action"})]})}),d.skel?(0,n.jsx)(w.Z,{children:(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",p:"2px",mr:"10px"},children:(0,n.jsx)(f.Z,{sx:{height:"60px",width:"90%"}})}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",p:"2px",mr:"10px"},children:(0,n.jsx)(f.Z,{sx:{height:"60px",width:"90%"}})}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",p:"2px",mr:"10px"},children:(0,n.jsx)(f.Z,{sx:{height:"60px",width:"90%"}})}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",p:"2px",mr:"10px"},children:(0,n.jsx)(f.Z,{sx:{height:"60px",width:"90%"}})}),(0,n.jsxs)(S.Z,{align:"center",sx:{cursor:"pointer",mr:"10px",p:"2px",display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)(f.Z,{sx:{height:"60px",width:"47%"}}),(0,n.jsx)(f.Z,{sx:{height:"60px",width:"47%"}})]})]})}):(0,n.jsx)(w.Z,{children:(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer"},children:1}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer"},children:t.delAddress.receiverName}),(0,n.jsxs)(S.Z,{align:"center",sx:{cursor:"pointer"},children:[t.delAddress.address,",",t.delAddress.landMark,",",t.delAddress.state,"-",t.delAddress.pinCode,",",t.delAddress.country]}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer"},children:t.delAddress.mobile}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer"},children:(0,n.jsxs)(Z.Z,{children:[(0,n.jsx)(i.Z,{variant:"contained",sx:{bgcolor:"black","&:hover":{bgcolor:"black"},p:"3px 0px",fontSize:"12px",mr:"10px"},children:"edit"}),(0,n.jsx)(i.Z,{variant:"contained",sx:{bgcolor:"red","&:hover":{bgcolor:"red"},p:"3px 0px",fontSize:"12px"},onClick:()=>{handleDeleteCat(ele._id)},children:"delete"})]})})]})})]})})})]}),(0,n.jsxs)(o.ZP,{container:!0,sx:{mt:"30px"},children:[(0,n.jsx)(o.ZP,{item:!0,xs:12,children:(0,n.jsx)(Z.Z,{children:(0,n.jsx)(l.Z,{align:"center",sx:{fontSize:"20px",fontWeight:"900"},children:"Items Details"})})}),(0,n.jsx)(o.ZP,{item:!0,xs:12,sx:{p:" 0px 10px"},children:d.skel?(0,n.jsxs)(Z.Z,{sx:{mt:"20px",display:"flex",justifyContent:"space-evenly"},children:[(0,n.jsx)(f.Z,{sx:{width:"200px",height:"50px"}}),(0,n.jsx)(f.Z,{sx:{width:"200px",height:"50px"}}),(0,n.jsx)(f.Z,{sx:{width:"200px",height:"50px"}}),(0,n.jsx)(f.Z,{sx:{width:"200px",height:"50px"}})]}):(0,n.jsxs)(Z.Z,{sx:{mt:"20px",display:"flex",justifyContent:"space-evenly"},children:[(0,n.jsxs)(l.Z,{sx:{color:"black",cursor:"pointer",mt:"-6px"},children:[(0,n.jsx)("span",{style:{fontSize:"18px",fontWeight:"900",color:"green"},children:"Order Status :"}),"  ",(0,n.jsx)("span",{style:{fontSize:"15px",fontWeight:"400px"},children:t.orderStatus}),(0,n.jsx)(i.Z,{variant:"contained",size:"small",sx:{ml:"5px",p:"0px",fontSize:"13px",mb:"3px"},onClick:()=>{a(!0)},children:"Change"}),(0,n.jsx)(components_ChangeOrderStatus,{open:x,setOpen:a,orderdetail:t,fetchData:fetchData})]}),(0,n.jsxs)(l.Z,{sx:{color:"black",cursor:"pointer",mt:"-6px"},children:[(0,n.jsx)("span",{style:{fontSize:"18px",fontWeight:"900",color:"green"},children:"Tax:"}),(0,n.jsx)("span",{style:{fontSize:"15px",fontWeight:"400px"},children:t.tax})]}),(0,n.jsxs)(l.Z,{sx:{color:"black",cursor:"pointer",mt:"-6px"},children:[(0,n.jsx)("span",{style:{fontSize:"18px",fontWeight:"900",color:"green"},children:"Delivery Charge :"}),"  ",(0,n.jsx)("span",{style:{fontSize:"15px",fontWeight:"400px"},children:t.delChrg})]}),(0,n.jsxs)(l.Z,{sx:{color:"black",cursor:"pointer",mt:"-6px"},children:[(0,n.jsx)("span",{style:{fontSize:"18px",fontWeight:"900",color:"green"},children:"Sub Total :"}),"  ",(0,n.jsx)("span",{style:{fontSize:"15px",fontWeight:"400px"},children:t.subTotal})]}),(0,n.jsxs)(l.Z,{sx:{color:"black",cursor:"pointer",mt:"-6px"},children:[(0,n.jsx)("span",{style:{fontSize:"18px",fontWeight:"900",color:"green"},children:"Payment Method :"}),"  ",(0,n.jsx)("span",{style:{fontSize:"15px",fontWeight:"400px"},children:t.paymentMethod})]})]})}),(0,n.jsx)(o.ZP,{item:!0,xs:12,children:(0,n.jsxs)(u.Z,{container:"true",component:c.Z,children:[(0,n.jsxs)(u.Z,{"aria-label":"sticky table",children:[(0,n.jsx)(y.Z,{children:(0,n.jsxs)(b.Z,{sx:{bgcolor:"#616161"},children:[(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"S.N"}),(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Item Name"}),(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Qty"}),(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Mrp"}),(0,n.jsx)(S.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Srp"})]})}),d.skel?(0,n.jsx)(w.Z,{children:(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",p:"2px",justifyContent:"Center"},children:(0,n.jsx)(f.Z,{sx:{height:"60px",width:"90%"}})}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",p:"2px"},children:(0,n.jsx)(f.Z,{sx:{height:"60px",width:"90%"}})}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",p:"2px"},children:(0,n.jsx)(f.Z,{sx:{height:"60px",width:"90%"}})}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",p:"2px"},children:(0,n.jsx)(f.Z,{sx:{height:"60px",width:"90%"}})}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",p:"2px"},children:(0,n.jsx)(f.Z,{sx:{height:"60px",width:"90%"}})})]})}):(0,n.jsx)(w.Z,{children:t.items.map((e,t)=>(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer"},children:t+1}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer"},children:e.name}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer"},children:e.qty}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer"},children:e.mrp}),(0,n.jsx)(S.Z,{align:"center",sx:{cursor:"pointer",textTransform:"capitalize"},children:e.srp})]}))})]}),(0,n.jsx)(Z.Z,{sx:{p:"10px",pl:"20px",bgcolor:"#eeeeee",display:"flex",justifyContent:"center"},children:d.skel?(0,n.jsx)(f.Z,{sx:{width:"200px",height:"50px"}}):(0,n.jsxs)(l.Z,{align:"center",children:[(0,n.jsx)("span",{style:{fontSize:"20px",fontWeight:"900"},children:"To Pay : "}),(0,n.jsxs)("span",{style:{fontSize:"17px",color:"green",fontWeight:"600"},children:[t.toPay," Rs"]})]})})]})})]})]})]})}},73:function(e,t,s){"use strict";var n=s(7437),r=s(4982),i=s(9872),l=s(8874),x=s(3226),o=s(2375),c=s(9245),a=s(9050),d=s(9222),h=s(2265);t.Z=e=>{let{open:t,setOpen:s,mid:p,fetchData:g,setCustomSnack:j,setErrorSnack:m}=e,[Z,f]=(0,h.useState)({catName:"",mid:p,image:""}),handleCollectData=e=>{let{name:t,value:s,files:n}=e.target;"image"==t?f({...Z,[t]:n[0]}):f({...Z,[t]:s})},handleAddCategory=async()=>{if(Z.catName&&Z.image)try{let e=new FormData;e.append("catName",Z.catName),e.append("image",Z.image),e.append("mid",Z.mid);let t=await d.Z.post("/api/category",e);"Category Created Successfully"==t.data.message?(g(),j({open:!0,message:t.data.message}),f({...Z,catName:"",image:""})):m({open:!0,message:t.data.message})}catch(e){console.log(e)}else m({open:!0,message:"please fill the all details"});s(!1)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Z,{open:t,onClose:()=>{s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,n.jsx)(i.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"white",p:4,textAlign:"center",height:250,bgcolor:"white"},children:(0,n.jsxs)(l.ZP,{container:!0,children:[(0,n.jsx)(l.ZP,{item:!0,xs:12,sx:{mb:"45px"},children:(0,n.jsx)(x.Z,{align:"center",sx:{bgcolor:"black",color:"white",p:"10px",fontSize:"14px",fontWeight:"700"},children:" Add New"})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:3,lg:3,sx:{pr:"7px",display:"flex",alignItems:"center",justifyContent:"right"},children:(0,n.jsx)(x.Z,{sx:{fontSize:"14px"},children:"Category Name:"})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:9,lg:9,sx:{display:"flex",alignItems:"center"},children:(0,n.jsx)(o.Z,{sx:{height:"30px"},name:"catName",value:Z.catName,fullWidth:!0,onChange:e=>{handleCollectData(e)}})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(x.Z,{sx:{fontSize:"17px"},children:"Image:"})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,sm:12,md:9,lg:9,sx:{display:"flex",alignItems:"center"},children:(0,n.jsx)(c.Z,{sx:{height:"30px",width:"100%"},children:(0,n.jsxs)(x.Z,{align:"center",sx:{position:"relative",top:"0px",mt:"4px",border:"1px solid gray"},children:[(0,n.jsx)("input",{type:"file",name:"image",value:Z.img,style:{zIndex:99,opacity:0,position:"absolute",left:"0px",top:"0px",height:"30px",width:"100%"},onChange:e=>{handleCollectData(e)}}),"Choose Image"]})})}),(0,n.jsx)(l.ZP,{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(a.Z,{variant:"contained",sx:{bgcolor:"black",color:"white","&:hover":{bgcolor:"black"}},onClick:handleAddCategory,children:"create Category"})})]})})})})}}},function(e){e.O(0,[7368,6659,3559,8874,1228,725,877,4532,657,4674,3226,2971,7864,1744],function(){return e(e.s=6386)}),_N_E=e.O()}]);