import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import DeleteTask from './DeleteTask';

describe('DeleteTask component', () => {
  test('calls setTasks and setCount with updated tasks and count when "Delete Task" button is clicked', () => {
    // Mock task and taskList
    const task = { id: 1, name: 'Task 1', description: 'Description 1' };
    const taskList = [
      { id: 1, name: 'Task 1', description: 'Description 1' },
      { id: 2, name: 'Task 2', description: 'Description 2' },
    ];

    // Mock setTasks and setCount functions
    const mockSetTasks = jest.fn();
    const mockSetCount = jest.fn();

    // Render the component
    const { getByText } = render(
      <DeleteTask
        task={task}
        taskList={taskList}
        setTasks={mockSetTasks}
        setCount={mockSetCount}
        count={taskList.length}
      />
    );

    // Find the "Delete Task" button and simulate a click event
    const deleteTaskButton = getByText('Delete Task');
    fireEvent.click(deleteTaskButton);

    // Expect setTasks and setCount to be called with updated tasks and count
    expect(mockSetTasks).toHaveBeenCalledWith([taskList[1]]);
    expect(mockSetCount).toHaveBeenCalledWith(taskList.length - 1);
  });
});
