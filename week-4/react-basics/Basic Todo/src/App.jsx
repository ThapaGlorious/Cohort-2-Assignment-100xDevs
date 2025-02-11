import { useState } from 'react';


function App(){

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [todo,setTodo] = useState([]);

  function newTitle(event){
    setTitle(event.target.value)
  }

  function newDescription(event){
    setDescription(event.target.value)
  }

  function AddTodoFunction(){
    setTodo([...todo, {title,description}])
  }

  return <div>
    <input type="text" placeholder="title" value={title} onChange={newTitle} /> <br /><br />
    <input type="text" placeholder="description" value={description} onChange={newDescription} /><br /><br />
    <button onClick={AddTodoFunction}>Add a Todo</button>

    {todo.map((a,index)=>{
      return <div key={index}>
      <h4>{a.title}</h4>
      <h2>{a.description}</h2>
      </div>
    })}
  </div>

  
}

export default App;