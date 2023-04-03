import React from 'react'

function UpdateForm({updateData, changeTask, updateTask, cancelUpdate}) {
  return (
    <>
    <div className="row">
      <div className="col-9">
        <input type="text"
               className="form-control"
               value={updateData && updateData.title}
               onChange={(e)=> changeTask(e)}
             />
    </div>
     <div className="col-auto">
      <button className="btn btn-success me-2 mb-2" onClick={updateTask} >Update</button>
      <button className="btn btn-warning mr-20 mb-2" onClick={cancelUpdate}>Cancel</button>
     </div>
  </div>
</>
  )
}

export default UpdateForm;