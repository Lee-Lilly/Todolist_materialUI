import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import Todo from './Todo';
import TodoTable from './TodoTable';
import { fireEvent } from '@testing-library/dom';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders todotable', () => {
  const row = [
    { task: 'Go to coffee', date: '24/11/2019' }
  ]
  const todotable = render(<TodoTable todos={row} />);
  expect(todotable.container).toHaveTextContent('Go to coffee');
})

test('add todo', () => {
  const { container, getByText, getByPlaceholderText } = render(<Todo />);

  const desc = getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Go to coffee' } })

  const date = getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '29.11.2019' } })

  const button = getByText('Add');
  fireEvent.click(button);

  expect(container).toHaveTextContent('Go to coffee');
})

test('clear todotable', () => {
  const rows = [
    { desc: 'Go to coffee', date: '24/11/2019' },
    { desc: 'Take train', date: '29/11/2019' },
    { desc: 'Shopping', date: '30/11/2019' }
  ]

  const { container, getByText } = render(<Todo todos={rows}/>);

  const button = getByText('Clear All');
  fireEvent.click(button)

  expect(container).not.toHaveTextContent('Go to coffee');
  expect(container).not.toHaveTextContent('Take train');
  expect(container).not.toHaveTextContent('Shopping');
})
