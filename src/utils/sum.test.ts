import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum function', () => {
    // case1
    it('should return correct result', () => {
        expect(sum(1, 2)).toBe(3);
    });
    // case2
    it('should handle negative numbers', () => {
        expect(sum(-1, -1)).toBe(-2);
    });

    // Error Case
    // it('should fail because expected value is wrong', () => {
    //     expect(sum(1, 2)).toBe(4);
    // });
});