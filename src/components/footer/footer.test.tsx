import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Component: Footer', () => {
  it('renders footer with logo link and image', () => {
    render(<Footer />);


    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();


    const link = screen.getByRole('link', { name: /6 cities logo/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'main.html');


    const img = screen.getByAltText('6 cities logo');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'img/logo.svg');
    expect(img).toHaveAttribute('width', '64');
    expect(img).toHaveAttribute('height', '33');
  });
});
