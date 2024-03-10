import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentlyViewing from './CurrentlyViewing';

describe('CurrentlyViewing component', () => {
  test('renders "Currently viewing" message with selected task', () => {
    // Mock selected task
    const selectedTask = 'Task 1';

    // Render the component with selected task
    const { getByText } = render(<CurrentlyViewing selectedTask={selectedTask} />);

    // Check if the component renders the "Currently viewing" message with the selected task
    const messageElement = getByText(`Currently viewing: ${selectedTask}`);
    expect(messageElement).toBeInTheDocument();
  });

  test('renders "Currently viewing" message with default text if no task selected', () => {

    const initialState = 'No task selected';

    // Render the component without selected task
    const { getByText } = render(<CurrentlyViewing selectedTask={initialState}/>);

    // Check if the component renders the default "Currently viewing" message
    const messageElement = getByText(`Currently viewing: ${initialState}`);
    expect(messageElement).toBeInTheDocument();
  });
});
