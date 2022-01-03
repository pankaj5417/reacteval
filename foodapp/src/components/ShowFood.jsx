import { useState } from "react"
import { Form } from "./Form"
import { ShowDetail } from "./showDetail"

export const ShowFood=({data})=>{

    
    const [food, showFood]=useState()
    const showitem=(addFood)=>{

        console.log("food",addFood)
    }
    const showdetail=()=>{
        showFood(data)
    }

    return (
        <><div>
{data?data.map((d)=>(
            <ul>
              <li onClick={showdetail}>
                  <div className="list">
                  <p>{d.title}</p>
                  <p>{d.time}</p>
                  </div>
              
               </li>
          
            </ul>
          
        )):""}
        </div>
      <div>
      <h3>{
        food?food.map(d=>(d.title)):""
       }
        </h3>
     </div>  
<ShowDetail data={food} />
    

        </>
    )

}