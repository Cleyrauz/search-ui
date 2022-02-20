import { render, screen, fireEvent, within } from '@testing-library/react';
import SearchBox from '../SearchBox';

it('should render result item', async () => {
  render(<SearchBox />);
  
  const inputElement = screen.getByPlaceholderText(/search something.../i);
  const buttomElement = screen.getByRole('button');

  fireEvent.change(inputElement, {target: {value: "something"}})
  fireEvent.click(buttomElement)

  const resultElement = await screen.findByTestId("result-item-0")
  expect(resultElement).toBeInTheDocument();
  
});

it('should render multiple result items', async () => {
    render(<SearchBox />);
    
    const inputElement = screen.getByPlaceholderText(/search something.../i);
    const buttomElement = screen.getByRole('button');
  
    fireEvent.change(inputElement, {target: {value: "something"}})
    fireEvent.click(buttomElement)
  
    const resultElements = await screen.findAllByTestId(/result-item-/i)
    expect(resultElements.length).toBe(3);
    
  });
  
