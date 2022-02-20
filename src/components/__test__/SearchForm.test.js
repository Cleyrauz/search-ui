import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../SearchForm';

const mockedOnSearchSubmit = jest.fn();

  it('should render input element', () => {
  render(<SearchForm onSearchSubmit={mockedOnSearchSubmit} />);
  const inputElement = screen.getByPlaceholderText(/search something.../i);
  expect(inputElement).toBeInTheDocument();

  });

  it('should be able to type into input element', () => {
    render(<SearchForm onSearchSubmit={mockedOnSearchSubmit} />);
    const inputElement = screen.getByPlaceholderText(/search something.../i);
    fireEvent.change(inputElement, {target: {value: "something"}})
    expect(inputElement.value).toBe("something");
  
  });

  it('should have empty input when search buttom is clicked', () => {
    render(<SearchForm onSearchSubmit={mockedOnSearchSubmit} />);
    const inputElement = screen.getByPlaceholderText(/search something.../i);
    const buttomElement = screen.getByRole('button');
    fireEvent.change(inputElement, {target: {value: "something"}})
    fireEvent.click(buttomElement)
    expect(inputElement.value).toBe("");
  
  });
  
