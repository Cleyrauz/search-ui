import { getAllByTestId, render, screen } from '@testing-library/react';
import SearchList from '../SearchList';

const resutlsFixture =  [
    {
      "title": "Tempor Iisque",
      "description": "sapien adversarium possim",
      "tags": [
        "delenit",
        "eripuit"
      ],
      "weight": 1
    },
    {
      "title": "Turpis ad",
      "description": "expetenda tempor massa taciti falli viverra",
      "tags": [
        "signiferumque",
        "mentitum"
      ],
      "weight": 5
    },
    {
      "title": "Urbanitas Ubique Pertinacia Disputationi Disputationi",
      "description": "lobortis maximus propriae falli elementum qualisque convenire ultrices aliquet non constituam periculis erroribus quisque",
      "tags": [
        "maiestatis",
        "alterum"
      ],
      "weight": 10
    }
  ]  


it('should render all the expected results passed as props', () => {
  render(<SearchList results={resutlsFixture} />);
  const resultElements = screen.getAllByTestId(/result-item-/i)
  expect(resultElements.length).toBe(3);
});

it('should render all the expected tags list passed as results', () => {
    render(<SearchList results={resutlsFixture} />);
    const tags = screen.getAllByTestId(/result-tag-/i)
    expect(tags.length).toBe(6)
  });

it("should render list of results in a specific order by weight", () => {
    render(<SearchList results={resutlsFixture} />);
    const titles = screen.getAllByTestId("title");
    const titleNames = titles.map(t => t.textContent)
    expect(titleNames).toMatchInlineSnapshot(`
    Array [
      "Urbanitas Ubique Pertinacia Disputationi Disputationi",
      "Turpis ad",
      "Tempor Iisque",
    ]
    `)
  })