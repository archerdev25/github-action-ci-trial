import { describe, test, expect } from 'vitest';
import { calculateDiscount } from './discount';

describe('calculateDiscount - 分支覆蓋率 50%', () => {
    // ❌ 只測試了 if 分支，沒測試 else 分支
    test('會員應該享有 9 折優惠', () => {
        expect(calculateDiscount(100, true)).toBe(90);
    });

    // 缺少測試: 非會員的情況
    // test('非會員應該原價', () => {
    //   expect(calculateDiscount(100, false)).toBe(100);
    // });
});