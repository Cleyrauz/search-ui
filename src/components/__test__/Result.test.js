import { render, screen, within } from '@testing-library/react';
import Result from '../Result';

it('should render a result with title, description and 2 tags', () => {
  const tags = ["tag 1", "tag 2"]      

  render(<Result title="My Title" description="My Description" tags={tags} />);
  const titleElemeent = screen.getByText(/my title/i);
  const descriptionElement = screen.getByText(/my description/i);
  
  const list = screen.getByRole("list")
  const { getAllByRole } = within(list)
  const items = getAllByRole("listitem")
  expect(items.length).toBe(2)

  expect(titleElemeent).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});
