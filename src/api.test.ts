// api.test.ts
import { vi, describe, it, expect } from 'vitest';
import { getUser } from './api';
import axios from 'axios';

vi.mock('axios'); // 告訴 Vitest 攔截 axios

describe('getUser', () => {
    it('should return mocked user data', async () => {
        // 設定 mock 回傳值
        vi.mocked(axios.get).mockResolvedValue({
            data: { id: 1, name: 'Archer' },
        });

        const result = await getUser(1);

        expect(result).toEqual({ id: 1, name: 'Archer' });
        expect(axios.get).toHaveBeenCalledWith('/api/users/1');
    });
});
