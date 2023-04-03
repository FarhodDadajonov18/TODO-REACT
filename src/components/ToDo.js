import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function ToDo({ toDo, setUpdateData, deleteTask }) {
  return (
    <>
     {
          toDo && toDo
          .map((task, index) => {
           return( 
            <React.Fragment key = {task.id}>
               <div className="col taskBg">

                 <div className={task.status ? 'done' : ''}>
                   <div className="taskIndex">
                     <span className="taskNumber">{index + 1} </span>
                     <span className="taskTest">{task.title}</span>
                   </div>  
                </div>

                 <div className="iconWrap">

                   { task.status ? null : (
                         <span onClick={()=>setUpdateData(
                               { 
                                id:task.id,
                                title: task.title,
                                status: task.status ? true : false,
                               }
                                 )}>
                             <FontAwesomeIcon icon={faPen} />
                         </span>
                   )}

                   <span onClick={()=>deleteTask(task.id)}><FontAwesomeIcon icon={faTrashCan} /></span> 
                 </div>  

               </div>

            </React.Fragment>
          )
        })
         }
    </>
  )
}

export default ToDo;