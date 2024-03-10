import React, { useState } from 'react';

const DeleteAll = ({setTasks, setCount}) => {
  	
	const deleteAll = () => {
		setTasks([]);
		setCount(0);
	};

	return (
		<div>
			<button className="btn btn-danger" onClick={deleteAll}>Delete All</button>
		</div>
	)
}

export default DeleteAll;