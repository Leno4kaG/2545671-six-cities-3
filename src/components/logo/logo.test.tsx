import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './logo';
import { AppRoute } from '../../consts/consts';

describe('Component: Logo', () => {
  it('renders logo link and image', () => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: /6 cities logo/i });
    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute('href', AppRoute.Main);

    const img = screen.getByAltText('6 cities logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'img/logo.svg');

    expect(img).toHaveAttribute('width', '81');
    expect(img).toHaveAttribute('height', '41');
  });
});
