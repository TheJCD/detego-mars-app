import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import DeleteAll from './DeleteAll';

describe('DeleteAll component', () => {
  test('calls setTasks and setCount with empty array and zero respectively when "Delete All" button is clicked', () => {
    // Mock setTasks and setCount functions
    const mockSetTasks = jest.fn();
    const mockSetCount = jest.fn();

    // Render the component
    const { getByText } = render(<DeleteAll setTasks={mockSetTasks} setCount={mockSetCount} />);

    // Find the "Delete All" button and simulate a click event
    const deleteAllButton = getByText('Delete All');
    fireEvent.click(deleteAllButton);

    // Expect setTasks and setCount to be called with empty array and zero respectively
    expect(mockSetTasks).toHaveBeenCalledWith([]);
    expect(mockSetCount).toHaveBeenCalledWith(0);
  });
});

