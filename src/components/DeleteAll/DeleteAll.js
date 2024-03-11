import React, { useState } from 'react';

const DeleteAll = ({setTasks, setCount}) => {
  	
	const deleteAll = () => {
		setTasks([]);
		setCount(0);
	};

	return <button className="btn btn-danger" onClick={deleteAll}>Delete All</button>
}

export default DeleteAll;