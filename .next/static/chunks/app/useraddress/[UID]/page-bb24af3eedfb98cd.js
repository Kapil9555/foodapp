(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7570],{7754:function(e,t,s){"use strict";var n=s(6314);t.Z=void 0;var i=n(s(984)),l=s(7437),a=(0,i.default)((0,l.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");t.Z=a},7450:function(e,t,s){Promise.resolve().then(s.bind(s,6633))},6633:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return page}});var n=s(7437),i=s(4982),l=s(9872),a=s(8874),r=s(3226),o=s(2375),x=s(6882),d=s(9050),c=s(9222),p=s(4033),h=s(2265),components_AddNewAddress=e=>{let{open:t,setOpen:s,fetchData:p,customSnack:m,setCustomSnack:g}=e,[u,f]=(0,h.useState)({disabled:!1,loader:!1}),[j,Z]=(0,h.useState)({receiverName:"",address:"",landMark:"",state:"",country:"",pinCode:"",uid:"",mobile:""}),handleCollect=e=>{let{name:t,value:s}=e.target;Z({...j,[t]:s,uid:JSON.parse(localStorage.getItem("UID"))})},handleAdd=async()=>{f({...u,loader:!0});try{let e=await c.Z.post("/api/useraddress",j);console.log(e),"Address Added Successfully"==e.data.message?(p(),f({...u,loader:!1}),Z({receiverName:"",address:"",landMark:"",state:"",country:"",pinCode:"",uid:"",mobile:""}),s(!1),g({...m,open:!0,message:e.data.message})):(alert(e.data.message),f({...u,loader:!1}))}catch(e){console.log(e),alert(e)}};return(0,h.useEffect)(()=>{j.receiverName&&j.address&&j.landMark&&j.state&&j.country&&j.mobile&&j.pinCode&&j.uid?f({...u,disabled:!1}):f({...u,disabled:!0})},[j]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,{open:t,onClose:()=>{s(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,n.jsx)(l.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"white",p:4,textAlign:"center",height:"fit-content",bgcolor:"white"},children:(0,n.jsxs)(a.ZP,{container:!0,children:[(0,n.jsx)(a.ZP,{item:!0,xs:12,sx:{mb:"45px"},children:(0,n.jsx)(r.Z,{align:"center",sx:{bgcolor:"black",color:"white",p:"10px",fontSize:"14px",fontWeight:"700"},children:" Add New Address"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:3,lg:3,sx:{pr:"7px",display:"flex",alignItems:"center",justifyContent:"right"},children:(0,n.jsx)(r.Z,{sx:{fontSize:"14px"},children:"Receiver Name:"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:9,lg:9,sx:{display:"flex",alignItems:"center"},children:(0,n.jsx)(o.Z,{sx:{height:"30px"},name:"receiverName",value:j.receiverName,fullWidth:!0,onChange:handleCollect})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",pr:"7px",display:"flex",alignItems:"center",justifyContent:"right"},children:(0,n.jsx)(r.Z,{sx:{fontSize:"14px"},children:"Address:"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:(0,n.jsx)(o.Z,{sx:{height:"30px"},name:"address",value:j.address,fullWidth:!0,onChange:handleCollect})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",pr:"7px",display:"flex",alignItems:"center",justifyContent:"right"},children:(0,n.jsx)(r.Z,{sx:{fontSize:"14px"},children:"Land Mark:"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:(0,n.jsx)(o.Z,{sx:{height:"30px"},name:"landMark",value:j.landMark,fullWidth:!0,onChange:handleCollect})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",pr:"7px",display:"flex",alignItems:"center",justifyContent:"right"},children:(0,n.jsx)(r.Z,{sx:{fontSize:"14px"},children:"State:"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:(0,n.jsx)(o.Z,{sx:{height:"30px"},name:"state",value:j.state,fullWidth:!0,onChange:handleCollect})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",pr:"7px",display:"flex",alignItems:"center",justifyContent:"right"},children:(0,n.jsx)(r.Z,{sx:{fontSize:"14px"},children:"Country:"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:(0,n.jsx)(o.Z,{sx:{height:"30px"},name:"country",value:j.country,fullWidth:!0,onChange:handleCollect})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",pr:"7px",display:"flex",alignItems:"center",justifyContent:"right"},children:(0,n.jsx)(r.Z,{sx:{fontSize:"14px"},children:"Pin Code:"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:(0,n.jsx)(o.Z,{sx:{height:"30px"},type:"number",name:"pinCode",value:j.pinCode,fullWidth:!0,onChange:handleCollect})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:3,lg:3,sx:{mt:"15px",pr:"7px",display:"flex",alignItems:"center",justifyContent:"right"},children:(0,n.jsx)(r.Z,{sx:{fontSize:"14px"},children:"Mobile Number:"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sm:12,md:9,lg:9,sx:{mt:"15px",display:"flex",alignItems:"center"},children:(0,n.jsx)(o.Z,{sx:{height:"30px"},type:"number",name:"mobile",value:j.mobile,fullWidth:!0,onChange:handleCollect})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sx:{mt:"15px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%"},children:u.loader?(0,n.jsx)(x.Z,{size:20,sx:{mr:"10px",mt:"8px"}}):(0,n.jsx)(d.Z,{variant:"contained",disabled:u.disabled,sx:{bgcolor:"black",color:"white","&:hover":{bgcolor:"black"}},onClick:handleAdd,children:"Add Address"})})]})})})})};s(5321);var m=s(305),g=s(7754),u=s(9245),f=s(1898),j=s(4081),Z=s(3428),b=s(791),y=s(2582),v=s(7663),C=s(8496);let S=h.createContext(void 0);var w=s(2916);let P=["actions","children","defaultValue","name","onChange","value"],z=h.forwardRef(function(e,t){let{actions:s,children:i,defaultValue:l,name:a,onChange:r,value:o}=e,x=(0,b.Z)(e,P),d=h.useRef(null),[c,p]=(0,C.Z)({controlled:o,default:l,name:"RadioGroup"});h.useImperativeHandle(s,()=>({focus:()=>{let e=d.current.querySelector("input:not(:disabled):checked");e||(e=d.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let m=(0,v.Z)(t,d),g=(0,w.Z)(a),u=h.useMemo(()=>({name:g,onChange(e){p(e.target.value),r&&r(e,e.target.value)},value:c}),[g,r,p,c]);return(0,n.jsx)(S.Provider,{value:u,children:(0,n.jsx)(y.Z,(0,Z.Z)({role:"radiogroup",ref:m},x,{children:i}))})});var k=s(7),A=s(7042),I=s(5600),R=s(9975),N=s(8682),W=s(7927),M=s(9782),D=(0,M.Z)((0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),_=(0,M.Z)((0,n.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),O=s(5843);let L=(0,O.ZP)("span",{shouldForwardProp:O.FO})({position:"relative",display:"flex"}),U=(0,O.ZP)(D)({transform:"scale(1)"}),F=(0,O.ZP)(_)(({theme:e,ownerState:t})=>(0,Z.Z)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));var Radio_RadioButtonIcon=function(e){let{checked:t=!1,classes:s={},fontSize:i}=e,l=(0,Z.Z)({},e,{checked:t});return(0,n.jsxs)(L,{className:s.root,ownerState:l,children:[(0,n.jsx)(U,{fontSize:i,className:s.background,ownerState:l}),(0,n.jsx)(F,{fontSize:i,className:s.dot,ownerState:l})]})},B=s(8702),E=s(9446),H=s(6520),T=s(5702);function getRadioUtilityClass(e){return(0,T.Z)("MuiRadio",e)}let $=(0,H.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),q=["checked","checkedIcon","color","icon","name","onChange","size","className"],useUtilityClasses=e=>{let{classes:t,color:s,size:n}=e,i={root:["root",`color${(0,B.Z)(s)}`,"medium"!==n&&`size${(0,B.Z)(n)}`]};return(0,Z.Z)({},t,(0,I.Z)(i,getRadioUtilityClass,t))},J=(0,O.ZP)(N.Z,{shouldForwardProp:e=>(0,O.FO)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:s}=e;return[t.root,"medium"!==s.size&&t[`size${(0,B.Z)(s.size)}`],t[`color${(0,B.Z)(s.color)}`]]}})(({theme:e,ownerState:t})=>(0,Z.Z)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,R.Fq)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${$.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${$.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),V=(0,n.jsx)(Radio_RadioButtonIcon,{checked:!0}),G=(0,n.jsx)(Radio_RadioButtonIcon,{}),Q=h.forwardRef(function(e,t){var s,i,l,a;let r=(0,W.Z)({props:e,name:"MuiRadio"}),{checked:o,checkedIcon:x=V,color:d="primary",icon:c=G,name:p,onChange:m,size:g="medium",className:u}=r,f=(0,b.Z)(r,q),j=(0,Z.Z)({},r,{color:d,size:g}),y=useUtilityClasses(j),v=h.useContext(S),C=o,w=(0,E.Z)(m,v&&v.onChange),P=p;return v&&(void 0===C&&(l=v.value,C="object"==typeof(a=r.value)&&null!==a?l===a:String(l)===String(a)),void 0===P&&(P=v.name)),(0,n.jsx)(J,(0,Z.Z)({type:"radio",icon:h.cloneElement(c,{fontSize:null!=(s=G.props.fontSize)?s:g}),checkedIcon:h.cloneElement(x,{fontSize:null!=(i=V.props.fontSize)?i:g}),ownerState:j,classes:y,name:P,checked:C,onChange:w,ref:t,className:(0,A.Z)(y.root,u)},f))});var X=s(2653),page=()=>{let e=(0,p.useRouter)(),[t,s]=(0,h.useState)(!1),[i,o]=(0,h.useState)([]),[Z,b]=(0,h.useState)(!1),[y,v]=(0,h.useState)(""),[C,S]=(0,h.useState)({open:!1,message:"",deleteLoader:"",nextBtn:!1}),w=[,,].fill(1),fetchData=async()=>{let e=JSON.parse(localStorage.getItem("UID"));try{console.log(e);let t=await c.Z.get("/api/useraddress/".concat(e));"Fetched Successfully"==t.data.message&&(o(t.data.resp),b(!1),console.log("response data",t)),"No Data found"==t.data.message&&(b(!0),console.log("response",t.data.resp))}catch(e){alert(e)}};(0,h.useEffect)(()=>{fetchData()},[]);let addressDeleteHandler=async e=>{S({...C,deleteLoader:e});try{let t=await c.Z.delete("/api/removeuseraddress/".concat(e));"Address Removed Successfully"==t.data.message?(S({...C,open:!0,message:t.data.message,deleteLoader:""}),fetchData()):S({...C,open:!0,message:t.data.message,deleteLoader:""})}catch(e){alert(e)}};return console.log(C),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.ZP,{container:!0,children:[(0,n.jsx)(a.ZP,{container:!0,justifyContent:"space-between",alignItems:"center",sx:{height:"70px",bgcolor:"#37474f"},children:(0,n.jsx)(a.ZP,{item:!0,xs:12,children:(0,n.jsx)(r.Z,{align:"center",sx:{color:"white",fontSize:"20px",fontWeight:"600",cursor:"pointer",userSelect:"none"},children:"User Address"})})}),(0,n.jsx)(a.ZP,{container:!0,sx:{display:"flex",pb:"10px",justifyContent:"center",alignItems:"center",mt:"0px",overflow:"hidden"},children:(0,n.jsx)(a.ZP,{item:!0,lg:5,md:6,sm:8,xs:11,children:(0,n.jsx)(l.Z,{sx:{borderRadius:"10px 10px 10px 10px",mt:"40px"},children:(0,n.jsxs)(a.ZP,{container:!0,sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,n.jsx)(a.ZP,{item:!0,xs:12,sx:{bgcolor:"#212121",padding:"8px",textAlign:"center",borderRadius:"11px 11px 0px 0px"},children:(0,n.jsx)(r.Z,{sx:{color:"White",fontSize:{lg:"25px",md:"23px",sm:"20px",xs:"18px"},fontWeight:"bold"},children:"Address"})}),(0,n.jsx)(a.ZP,{item:!0,xs:12,sx:{height:"100px",display:Z?"flex":"none",alignItems:"center",justifyContent:"center"},children:(0,n.jsx)(r.Z,{sx:{color:"#bdbdbd"},children:"No Address Added"})}),(0,n.jsx)(a.ZP,{container:!0,sx:{display:Z?"none":"block"},children:0==i.length?(0,n.jsx)(a.ZP,{container:!0,sx:{justifyContent:"space-around"},children:w.map((e,t)=>(0,n.jsx)(a.ZP,{item:!0,lg:12,sx:{mt:"20px",overflow:"hidden",bgcolor:"#eeeeee"},children:(0,n.jsx)(u.Z,{sx:{width:"100%",p:"10px"},children:(0,n.jsxs)(u.Z,{sx:{mt:"10px",width:"100%",mb:"10px"},children:[(0,n.jsxs)(u.Z,{sx:{width:"100%",display:"flex",justifyContent:"space-between"},children:[(0,n.jsx)(f.Z,{variant:"text",sx:{fontSize:"17px",width:"60%",height:"20px"}}),(0,n.jsx)(f.Z,{variant:"text",sx:{fontSize:"17px",height:"50px",width:"20px",mr:"50px"}})]}),(0,n.jsx)(f.Z,{variant:"text",sx:{fontSize:"17px",width:"60%",mt:"-30px"}}),(0,n.jsx)(f.Z,{variant:"text",sx:{fontSize:"17px",width:"60%"}}),(0,n.jsx)(f.Z,{variant:"text",sx:{fontSize:"17px",width:"60%"}}),(0,n.jsx)(f.Z,{variant:"text",sx:{fontSize:"17px",width:"60%"}})]})})},t))}):(0,n.jsx)(a.ZP,{container:!0,children:(0,n.jsx)(a.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:(0,n.jsx)(j.Z,{sx:{width:"100%",p:"10px"},children:(0,n.jsx)(z,{"aria-labelledby":"demo-radio-buttons-group-label",value:y,onChange:e=>{v(e.target.value)},sx:{display:"flex",justifyContent:"center",alignItems:"center"},children:i.map(e=>(0,n.jsx)(l.Z,{elevation:1,sx:{width:"95%",mt:"20px",p:"10px"},children:(0,n.jsx)(a.ZP,{container:!0,children:(0,n.jsxs)(a.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"space-between",p:"10px"},children:[(0,n.jsx)(k.Z,{value:e._id,control:(0,n.jsx)(Q,{color:"success",sx:{p:"0px",mr:"20px"}}),label:(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(r.Z,{sx:{fontSize:"18px",fontWeight:600,textTransform:"uppercase"},children:e.receiverName}),(0,n.jsx)(r.Z,{sx:{textTransform:"capitalize"},children:e.address}),(0,n.jsx)(r.Z,{sx:{textTransform:"capitalize"},children:e.landMark}),(0,n.jsxs)(r.Z,{sx:{textTransform:"uppercase"},children:[e.state,"-",e.pinCode]}),(0,n.jsx)(r.Z,{sx:{textTransform:"capitalize"},children:e.country}),(0,n.jsx)(r.Z,{sx:{textTransform:"capitalize"},children:e.mobile})]})}),(0,n.jsx)(u.Z,{children:C.deleteLoader==e._id?(0,n.jsx)(x.Z,{size:20,sx:{mr:"10px",mt:"8px"}}):(0,n.jsx)(X.Z,{sx:{height:"fit-content",width:"fit-content"},onClick:()=>{addressDeleteHandler(e._id)},children:(0,n.jsx)(g.Z,{sx:{color:"red",fontSize:"30px"}})})})]})})},e.address))})})})})}),(0,n.jsxs)(a.ZP,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",p:"10px"},children:[0!=i.length||Z?(0,n.jsx)(d.Z,{variant:"contained",onClick:()=>{s(!0)},children:"Add New Address"}):(0,n.jsx)(f.Z,{variant:"rectangular",sx:{height:"40px",width:"30%"}}),(0,n.jsx)(components_AddNewAddress,{open:t,setOpen:s,fetchData:fetchData,customSnack:C,setCustomSnack:S})]})]})})})})]}),""!=y&&(0,n.jsx)(d.Z,{variant:"contained",sx:{position:"fixed",right:40,bottom:20,fontSize:"16px",color:"white",bgcolor:"green",fontWeight:"600","&:hover":{bgcolor:"green"}},disabled:C.nextBtn,onClick:()=>{S({...C,nextBtn:!0});let t=JSON.parse(localStorage.getItem("UID"));""!=y?e.push("/billing/".concat(y,"/").concat(t)):alert("Please Select Any Address")},children:C.nextBtn?"Wait...":"Proceed"}),(0,n.jsx)(m.Z,{customSnack:C,setCustomSnack:S}),(0,n.jsx)(SnackBarCustomError,{customSnack:C,setCustomSnack:S})]})}},5321:function(e,t,s){"use strict";s.d(t,{Z:function(){return components_Header}});var n=s(7437),i=s(8874),l=s(9245),a=s(3226),r=s(2653),o=s(5544);s(2265);var x=s(5404),d=s(4896),c=s(7283),p={src:"/_next/static/media/av1.9928ca83.webp",height:768,width:768,blurDataURL:"data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAACwAQCdASoIAAgAAkA4JZwCdADzesjgAP6txy8CO45h2bi/mWaAs40TL2TfNyXL9mqVO3l/jga65dedzFMysAFPDvzSqbDmjPxUhvWPgAA=",blurWidth:8,blurHeight:8},h=s(6691),m=s.n(h),g=s(9668),u=s(2782),f=s(8991),components_Header=()=>(0,n.jsxs)(i.ZP,{container:!0,children:[(0,n.jsx)(i.ZP,{item:!0,xs:12,sx:{p:{lg:"13px 0px",md:"13px 0px",sm:"10px 0px",xs:"10px 0px"}},children:(0,n.jsxs)(l.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(l.Z,{children:(0,n.jsx)(a.Z,{sx:{fontSize:{lg:"30px",md:"30px",sm:"30px",xs:"20px"},fontWeight:900},children:"Favorite Menu"})}),(0,n.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsxs)(l.Z,{sx:{mr:{lg:"30px",md:"30px",sm:"20px",xs:"10px"}},children:[(0,n.jsx)(r.Z,{children:(0,n.jsx)(x.Z,{sx:{color:"black",fontSize:{xs:"20px",sm:"30px",md:"30px",lg:"30px"}}})}),(0,n.jsx)(r.Z,{children:(0,n.jsx)(d.Z,{sx:{color:"black",fontSize:{xs:"20px",sm:"30px",md:"30px",lg:"30px"}}})}),(0,n.jsx)(r.Z,{children:(0,n.jsx)(c.Z,{sx:{color:"black",fontSize:{xs:"20px",sm:"30px",md:"30px",lg:"30px"}}})})]}),(0,n.jsx)(l.Z,{sx:{position:"relative",height:{lg:"50px",md:"50px",sm:"50px",xs:"40px"},width:{lg:"50px",md:"50px",sm:"50px",xs:"40px"}},children:(0,n.jsx)(m(),{alt:"Remy Sharp",src:p,style:{height:"100%",width:"100%",borderRadius:"15px"}})})]})]})}),(0,n.jsxs)(i.ZP,{container:!0,sx:{p:{lg:"5px 0px",md:"5px 0px",sm:"5px 0px",xs:"5px 0px"}},children:[(0,n.jsx)(i.ZP,{item:!0,lg:4.5,md:5,sm:6,xs:7.5,children:(0,n.jsxs)(l.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(r.Z,{sx:{height:{lg:"50px",md:"50px",sm:"50px",xs:"40px"},width:"50px",borderRadius:"10px 0px 0px 10px",bgcolor:"white","&:hover":{bgcolor:"white"}},children:(0,n.jsx)(f.Z,{sx:{color:"#ffb300",fontSize:"30px"}})}),(0,n.jsx)(o.ZP,{placeholder:"What do you want to eat...",sx:{fontSize:{lg:"15px",md:"15px",sm:"15px",xs:"12px"},fontWeight:"500",color:"gray",bgcolor:"white",height:{lg:"50px",md:"50px",sm:"50px",xs:"40px"},borderRadius:"0px 10px 10px 0px",border:"none",outline:"none",width:"100%"}})]})}),(0,n.jsx)(i.ZP,{item:!0,lg:7.5,md:7,sm:6,xs:4.5,sx:{display:"flex",justifyContent:"right",alignItems:"center"},children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(r.Z,{sx:{height:{lg:"50px",md:"50px",sm:"50px",xs:"40px"},width:{lg:"50px",md:"50px",sm:"50px",xs:"40px"},borderRadius:"15px",bgcolor:"white",mr:{lg:"30px",md:"30px",sm:"20px",xs:"10px"},"&:hover":{bgcolor:"white"}},children:(0,n.jsx)(u.Z,{sx:{color:"#bdbdbd"}})}),(0,n.jsx)(r.Z,{sx:{height:{lg:"50px",md:"50px",sm:"50px",xs:"40px"},width:{lg:"50px",md:"50px",sm:"50px",xs:"40px"},borderRadius:"15px",bgcolor:"#fff8e1","&:hover":{bgcolor:"#fff8e1"}},children:(0,n.jsx)(g.Z,{sx:{color:"#ffb300",fontSize:"30px"}})})]})})]})]})},305:function(e,t,s){"use strict";var n=s(7437),i=s(7292),l=s(9804);s(2265),t.Z=e=>{let{customSnack:t,setCustomSnack:s}=e,handleClose=(e,n)=>{"clickaway"!==n&&s({...t,open:!1})};return(0,n.jsx)(i.Z,{open:t.open,anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:2e3,onClose:handleClose,children:(0,n.jsx)(l.Z,{onClose:handleClose,severity:"success",sx:{width:"100%"},children:t.message})})}}},function(e){e.O(0,[7368,6659,3559,8874,1228,6691,725,877,4532,3221,2987,3901,2971,7864,1744],function(){return e(e.s=7450)}),_N_E=e.O()}]);