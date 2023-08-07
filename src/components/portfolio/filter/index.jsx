import { useState } from "react";
import React from 'react'

import "./style.scss"



const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "UI/UX",
        id: "product",
    },
    {
        name: "Front-end",
        id: "web-page",
    },
    {
        name: "Web Flow",
        id: "web-app",
    },
]


const Filter = ({filterProjects}) => {
    // console.log(filterProjects);

    const[active, setActive] = useState("")

    const clickHandler = (id) =>{
        setActive(id)
        filterProjects(id)
    }

  return (
   <ul className="filter-menu-items">
    {filtersData.map((item) =>{
        return (
            <li
                key={item.id}
                className={`filter-menu-item ${
                    active === item.id ? "active" : ""
                }`}
                onClick={()=> clickHandler(item.id)}
            >
                {item.name}
            </li>
        )
    })}
   </ul>
    )
}


export default Filter