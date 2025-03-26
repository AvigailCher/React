// import React from "react";
// import { useState } from "react";
// import { useRef } from "react";
// import { useEffect } from "react";

// export default function Chat()
// {
//     const[notice,setNotice]=useState([]);
//     const[msg,setMsg]=useState('');
//     const refValue=useRef(null);
//     useEffect(() => {
//         refValue.current.scrollIntoView({block:"end",inline: "nearest"});
//       },[notice]);
//       return
//       <>
//       <div ref={refValue}>
//         {notice.map((m)=>(<h1>{m}</h1>))}
//         <input placeholder="הקלד כאן" onBlur={(e)=>{setMsg(e.target.value);e.target.value = ''}}></input>
//         <button onClick={()=>{setNotice([...notice,msg])}}>שלח</button>
//       </div>
//       </>
    
// }