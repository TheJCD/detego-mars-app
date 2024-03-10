import React, { useState } from 'react';

const ActiveTasksCounter = ({count}) => {
	return (
    <div className="task-list">
      <p>Active tasks: {count}</p>
    </div>
  )
}

export default ActiveTasksCounter;