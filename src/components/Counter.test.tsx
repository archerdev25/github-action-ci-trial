import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component', () => {
    test('初始值應該為 0', () => {
        render(<Counter />);
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    });

    test('點擊增加按鈕應該增加計數', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('增加'));
        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    });

    test('點擊減少按鈕應該減少計數', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('減少'));
        expect(screen.getByText('Count: -1')).toBeInTheDocument();
    });

    test('點擊重置按鈕應該回到 0', () => {
        render(<Counter />);
        fireEvent.click(screen.getByText('增加'));
        fireEvent.click(screen.getByText('增加'));
        fireEvent.click(screen.getByText('重置'));
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    });
});