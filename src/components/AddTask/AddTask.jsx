import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [value,setValue] = React.useState("");
  const [final,setFinal ] = React.useState([]);
  let handlefinc = () =>{
    setFinal([...final,value])
    setValue("");
  }
  return (
    <div className={styles.todoForm}>
      <div className={styles.firstdiv}>
      <input data-cy="add-task-input" type="text" value={value} placeholder="Add Task.." onChange={(e)=>setValue(e.target.value)}/>
      <button data-cy="add-task-button" onClick={handlefinc}>+</button>
      </div>
      <div className={styles.seconddiv}>
        {
          final.map(item=>(

            <div key={item}>
              <input type="checkbox" name="" id="" />
              {item}</div>
          )
           
          )
        }

      </div>
    </div>

    
  );
};

export default AddTask;
