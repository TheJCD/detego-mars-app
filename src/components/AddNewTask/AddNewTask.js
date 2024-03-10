import React, { useState } from 'react';

const AddNewTask = ({addTask}) => {

	//to show/not show the modal
	const [showModal, setShowModal] = useState(false);
  	const [taskName, setTaskName] = useState('');
  	const [owner, setNameOfOwner] = useState('');
  	const [assignedUser, setNameOfAssignedUser] = useState('');
  	const [taskDescription, setTaskDescription] = useState('');

	const createTask = () => {
	    setShowModal(true);
	};

	const addTaskNew = () => {
	    // Add task to list of tasks
	    const newTask = { id: Date.now(), name: taskName, description: taskDescription, owner: owner, assignedUser: assignedUser};
	    addTask(newTask);

	    // Reset fields and close modal
	    setTaskName('');
	    setTaskDescription('');
	    setNameOfOwner('');
	    setNameOfAssignedUser('');
	    setShowModal(false);
	};

	return (
		<>
        	<button className="btn btn-primary" onClick={createTask}>Add new task</button>
	        {showModal && (
	          <div className="marsModal card" style={{width: "18rem"}}>
	            <div className="card-body">

	              <h2 className="card-title">Create New Task</h2>

	              	<label className="card-text">Name:</label>
	                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)}  />

	              	<label className="card-text">Description:</label>
	                <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />

	               	<label className="card-text">Owner:</label>
	                <input value={owner} onChange={(e) => setNameOfOwner(e.target.value)} />

            		<label className="card-text">User who is assigned to this task:</label>
	                <input value={assignedUser} onChange={(e) => setNameOfAssignedUser(e.target.value)} />

	              <button className="btn btn-success" onClick={addTaskNew}>Add</button>
	              <span className="btn btn-secondary close" onClick={() => setShowModal(false)}>Cancel</span>
	            </div>
	          </div>
	        )}
	    </>
	)
}

export default AddNewTask;