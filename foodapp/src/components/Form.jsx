import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { ShowFood } from "./ShowFood"
import { Div } from "./styledcomponents/style"
 import './Form.css';
import { ShowDetail } from "./showDetail"
export const Form=(props)=>{

    const [form, setForm]=useState({
        title:"",
        ingredients:"",
        time:"",
        image:"",
        instructions:""
    })
    const [page,setPage]=useState(1)
    useEffect(()=>{
        getItem()
    },[page])
const ref=useRef(null)
const [data,setData]=useState()

const handleChange=(e)=>{
    const {name,value}=e.target;

    setForm({...form,[name]:value})
}

const getItem=()=>{
    fetch(`http://localhost:3001/fooditems`)
.then((d)=>d.json()).then((res)=>{setData(res)})
}
const addItem=()=>{
    fetch("http://localhost:3001/fooditems",{
        method:"POST",
        body:JSON.stringify(form),
        headers:{"content-type":"application/json"}
        })
        .then(()=>{getItem()
        })
}

console.log(data)

return (
    <>
    <div className="container">
    <Div>
    <form onSubmit={(e)=>{
        e.preventDefault()
        console.log(ref.current.files)
    //console.log(props.showitem(form))
        console.log(form)
       // setData(form)
    //setForm(form)
    }} action="">
    <input className="inputbox" onChange={handleChange} name="title" type="text" placeholder="Enter Title" />
    <br />
    <input className="inputbox" onChange={handleChange} name="ingredients" type="text" placeholder="Enter ingredients" />
    <br />
    <input className="inputbox" onChange={handleChange} name="time" type="time" placeholder="Enter time" />
    <br />
    <input className="inputbox" ref={ref} onChange={handleChange} name="image" type="file"  />
    <br />
    <input className="inputbox" onChange={handleChange} name="instructions" type="text" placeholder="Enter Instructions" />
    <br />
    <input className="submitbtn" onClick={addItem} onChange={handleChange}  type="submit" value="Add a new Recipe" />

    </form>
    </Div>
    <div className="showfood">
        <h3>List of Food Items</h3>
    <ShowFood data={data} />
    </div>
    </div>
    
    <div className="foodinfo">
       <h4 className="">Food Details</h4>
       <ShowDetail data={data} />
    </div>

    </>
)
}