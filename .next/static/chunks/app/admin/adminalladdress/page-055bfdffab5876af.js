(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{9826:function(e,n,r){Promise.resolve().then(r.bind(r,3728))},3728:function(e,n,r){"use strict";r.r(n);var t=r(7437),i=r(8938),s=r(8874),o=r(3226),c=r(9245),l=r(9050),a=r(3701),x=r(9872),h=r(6988),d=r(8489),p=r(666),g=r(9279),u=r(9222),Z=r(6691),f=r.n(Z),j=r(4346),b=r(2265),m=r(1608);n.default=()=>{let[e,n]=(0,b.useState)([]),[r,Z]=(0,b.useState)(!1),fetchData=async()=>{try{let e=await u.Z.get("/api/alladdress/");e.data.message="Fetched Successfully",n(e.data.resp),Z(!1),"No Data Found"==e.data.message&&Z(!0)}catch(e){console.log(e)}};return(0,b.useEffect)(()=>{fetchData()},[]),(0,t.jsxs)(i.Z,{maxWidth:!0,disableGutters:!0,children:[(0,t.jsx)(s.ZP,{container:!0,sx:{height:"80px",bgcolor:"black",alignItems:"center",width:"100%"},children:(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(o.Z,{sx:{fontSize:"30px",fontWeight:"900",color:"white"},children:"Admin DashBoard"})})}),(0,t.jsx)(s.ZP,{container:!0,children:(0,t.jsx)(s.ZP,{item:!0,xs:12,children:(0,t.jsx)(c.Z,{sx:{p:"15px",bgcolor:"#e0e0e0"},children:(0,t.jsx)(o.Z,{align:"center",sx:{fontSize:"25px",fontWeight:"900",color:"black",cursor:"pointer"},children:"All Addresses"})})})}),(0,t.jsx)(s.ZP,{item:!0,xs:12,sx:{p:"15px"},children:(0,t.jsx)(c.Z,{sx:{display:"flex",justifyContent:"right"},children:(0,t.jsx)(l.Z,{sx:{bgcolor:"black",color:"white","&:hover":{bgcolor:"black"},fontSize:"14px",fontWeight:"600"},onClick:()=>{setOpen(!0)},children:"add new address"})})}),(0,t.jsx)(c.Z,{sx:{overflow:"auto"},children:r?(0,t.jsx)(s.ZP,{container:!0,sx:{},children:(0,t.jsxs)(s.ZP,{item:!0,xs:12,sx:{height:"60vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,t.jsx)(c.Z,{sx:{position:"relative",height:"200px",width:"200px"},children:(0,t.jsx)(f(),{src:j.Z,alt:"no data",style:{height:"100%",width:"100%",position:"absolute"}})}),(0,t.jsx)(o.Z,{sx:{fontSize:"20px",fontWeight:"800",color:"#bdbdbd"},children:"No Data Found"})]})}):0==e.length?(0,t.jsx)(m.Z,{tableHead:["S.N","Receiver Name","Address","Land Mark","PinCode","Country","Contact no.","Action"]}):(0,t.jsx)(a.Z,{container:"true",component:x.Z,children:(0,t.jsxs)(a.Z,{"aria-label":"sticky table",children:[(0,t.jsx)(h.Z,{children:(0,t.jsxs)(d.Z,{sx:{backgroundColor:"black"},children:[(0,t.jsx)(p.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"S.N"}),(0,t.jsx)(p.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Receiver Name"}),(0,t.jsx)(p.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Address"}),(0,t.jsx)(p.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Land Mark"}),(0,t.jsx)(p.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"PinCode"}),(0,t.jsx)(p.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Country"}),(0,t.jsx)(p.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Contact no."}),(0,t.jsx)(p.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:"Action"})]})}),(0,t.jsx)(g.Z,{children:e.map((e,n)=>(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(p.Z,{align:"center",sx:{cursor:"pointer"},children:n+1}),(0,t.jsx)(p.Z,{align:"center",sx:{cursor:"pointer",textTransform:"capitalize"},children:e.receiverName}),(0,t.jsx)(p.Z,{align:"center",sx:{cursor:"pointer",textTransform:"capitalize"},children:e.address}),(0,t.jsx)(p.Z,{align:"center",sx:{cursor:"pointer",textTransform:"capitalize"},children:e.landMark}),(0,t.jsx)(p.Z,{align:"center",sx:{cursor:"pointer",textTransform:"capitalize"},children:e.pinCode}),(0,t.jsx)(p.Z,{align:"center",sx:{cursor:"pointer",textTransform:"capitalize"},children:e.country}),(0,t.jsx)(p.Z,{align:"center",sx:{cursor:"pointer",textTransform:"capitalize"},children:e.mobile}),(0,t.jsx)(p.Z,{align:"center",sx:{cursor:"pointer"},children:(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(l.Z,{variant:"contained",sx:{bgcolor:"black","&:hover":{bgcolor:"black"},p:"3px 0px",fontSize:"12px",mr:"10px"},children:"edit"}),(0,t.jsx)(l.Z,{variant:"contained",sx:{bgcolor:"red","&:hover":{bgcolor:"red"},p:"3px 0px",fontSize:"12px"},onClick:()=>{handleDeleteCat(e._id)},children:"delete"})]})})]},n))})]})})})]})}},1608:function(e,n,r){"use strict";var t=r(7437),i=r(3701),s=r(9872),o=r(6988),c=r(8489),l=r(666),a=r(9279),x=r(1898);r(2265),n.Z=e=>{let{tableHead:n}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.Z,{container:"true",component:s.Z,children:(0,t.jsxs)(i.Z,{"aria-label":"sticky table",children:[(0,t.jsx)(o.Z,{children:(0,t.jsx)(c.Z,{sx:{backgroundColor:"black"},children:n.map((e,n)=>(0,t.jsx)(l.Z,{align:"center",sx:{color:"white",fontSize:"16px",fontWeight:"900",cursor:"pointer"},children:e},n))})}),(0,t.jsx)(a.Z,{children:[,,,,,].fill(1).map((e,r)=>(0,t.jsx)(c.Z,{children:n.map((e,n)=>(0,t.jsx)(l.Z,{align:"center",sx:{cursor:"pointer",p:"2px"},children:(0,t.jsx)(x.Z,{sx:{height:"70px",width:"90%"}})},n))},r))})]})})})}},4346:function(e,n){"use strict";n.Z={src:"/_next/static/media/nodata2.bd7acd98.gif",height:600,width:800,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[7368,6659,3559,8874,6691,4674,6871,2971,7864,1744],function(){return e(e.s=9826)}),_N_E=e.O()}]);