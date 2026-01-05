import { describe, it, expect } from "vitest";
import { minus } from './minus';


describe("Failing sample test", () => {
   it('should return correct result', () => {
          expect(minus(1, 2)).toBe(-1);
      });
});