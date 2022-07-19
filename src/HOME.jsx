import React from "react";
import { NavLink } from "react-router-dom";
 const HOME =() =>{
    return (
        <>
        <header>
        <a href="#" >
            logo
        </a>
        <nav>
            <ul>
        <li>
       <NavLink to="/about" >HOME</NavLink>
        </li>
        <li>
       <NavLink to ="/">CLASS</NavLink>
       </li>

        </ul>
        </nav>
       </header>
        <h1>
            HOME
        </h1>
        </>
    );
 };
 export default  HOME;