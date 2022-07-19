// import React from "react"
// import { useState } from "react";
// import axios from 'axios';
// import { useEffect } from "react";
// const ComA = () =>{

//     const [nums,setnums] = useState();
//     const [moves,setmoves] = useState();
//     const [names,setnames] = useState();
//    useEffect (() =>{
//     async function getData(){
//         const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nums}`);
//         console.log(res.data.name);
//         setnames(res.data.name);
//         setmoves(res.data.moves.length);
//     }
//     getData();

//    });
// return(
//     <>
//     <h1> You choose <span style={{color :"red"}}>   {nums}</span> </h1>
//     <h1>  the moves is <span style={{color :"red"}}>   {moves}</span> </h1>
//     <h1> The name is <span style={{color :"red"}}>   {names}</span> </h1>

//     <select value={nums} onChange={(events) =>{
//         setnums(events.target.value);
//     }}  >
//         <option value={1}>1</option>
//         <option value={25}>25</option>
//         <option value={4}>4</option>
//         <option value={5}>5</option>
        


//     </select>
    
    
//     </>


// );    


// };
// export default ComA;