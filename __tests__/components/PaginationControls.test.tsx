import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaginationControls from '@/components/PaginationControls';

describe('PaginationControls', () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  it('renders pagination controls correctly', () => {
    render(
      <PaginationControls
        page={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    expect(screen.getByText('Précédent')).toBeInTheDocument();
    expect(screen.getByText('Suivant')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('disables previous button on first page', () => {
    render(
      <PaginationControls
        page={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const prevButton = screen.getByText('Précédent');
    expect(prevButton).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(
      <PaginationControls
        page={5}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = screen.getByText('Suivant');
    expect(nextButton).toBeDisabled();
  });

  it('calls onPageChange when clicking a page number', () => {
    render(
      <PaginationControls
        page={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when clicking next button', () => {
    render(
      <PaginationControls
        page={1}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const nextButton = screen.getByText('Suivant');
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange when clicking previous button', () => {
    render(
      <PaginationControls
        page={2}
        totalPages={5}
        onPageChange={mockOnPageChange}
      />
    );

    const prevButton = screen.getByText('Précédent');
    fireEvent.click(prevButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  });
});
