import React,{useState} from 'react'
import AddToDo from './AddToDo'
import {ListGroup,Button} from 'reactstrap'
import './index.css';



function App() {
  const [Value, setValue] = useState('')
  const [Items, setItems] = useState([])
  const clickhandler=()=>{
    // const todo=document.getElementById("inpt").value

    console.log(Value)
    if(Value==='')
    {
      alert("Pls Add a task")
      return
    }
    setItems((prevValue)=>{
      return [...prevValue,Value]
    })
    setValue('')
  }
  const deletehandler=(id)=>{
    const items_copy=[...Items]
    items_copy.splice(id,1)
    setItems(items_copy)
  }
  const freemarkup=Items.length===0?
  (
    <>
    <h1 style={{textAlign:"center"}}>You Dont Have Any Tasks To Do!</h1>
    <br/>
    <h2 style={{textAlign:"center"}}>Create One Now</h2>
    </>
  ):null
  
  return (
    <div className="App">
      <div style={{fontWeight:'bold', fontStyle:'normal',fontSize:'40px',margin:'40px auto 20px'}}><span className="glyphicon glyphicon-tasks"></span>  To Do List App  </div>
      <input placeholder="Add Tasks here" className="input-margin" type="text" value={Value} onChange={e=>setValue(e.target.value)}/>
      <button className="button-add"  onClick={clickhandler} >Add</button>
    
      <div className="wrapper">
        
        {freemarkup}
        <ListGroup >
          {Items.map((item,index)=>{
            return <AddToDo onDelete={()=>deletehandler(index)} key={index}  value={item}/>
          })}
        </ListGroup>

      </div>
    </div>
  );
}

export default App;
