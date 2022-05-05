import axios from "axios";
import {useState,useEffect} from "react";

const App=()=> {

const [tododata, setTododata] = useState([]);


 const preload = async()=>{
   const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/`);
   setTododata(res.data);
   
 }

 useEffect(() => {
   preload();
 }, []);

return (
  <div className="main">
  <h1>mytodo</h1>


  {
    tododata.map((todo,key)=>(
      <div className="data">
<input type="checkbox" name="" id="" />
<p>
        {todo.completed} {todo.title};
      </p>
      </div>
      
))
  }
  </div>
)

}

export default App;
