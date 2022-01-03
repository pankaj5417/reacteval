import { useState } from "react"
import { Form } from "./Form"

export const ShowDetail=({data})=>{

    console.log(data)
    
    return (
        <>
      <div>
      <h3>{
        data?data.map(d=>(
            <div>
         <p>{d.title}</p>
           <p>{d.time}</p>
           <img className="image" src={d.image} alt="" />
            
            </div>
          
            )):""
       }
        </h3>
     </div>  

    

        </>
    )

}