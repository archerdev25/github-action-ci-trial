import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import '@testing-library/jest-dom';

describe('Greeting Component', () => {
    it('should render greeting with name', () => {
        render(<Greeting name="Archer" />);
        expect(screen.getByText('Hello, Archer!')).toBeInTheDocument();
    });

    it('should render default greeting when no name is provided', () => {
        render(<Greeting />);
        expect(screen.getByText('Hello, Guest!')).toBeInTheDocument();
    });
});
