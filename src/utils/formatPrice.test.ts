import { describe, it, expect } from 'vitest';
import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
    it('formats integer amount with 2 decimal places', () => {
        expect(formatPrice(50)).toBe('$50.00');
    });

    it('formats decimal amount correctly', () => {
        expect(formatPrice(19.9)).toBe('$19.90');
    });

    it('formats 0 as $0.00', () => {
        expect(formatPrice(0)).toBe('$0.00');
    });

    it('formats with rounding', () => {
        expect(formatPrice(2.345)).toBe('$2.35');
    });
});