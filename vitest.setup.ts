import '@testing-library/jest-dom';
import { server } from './src/mocks/server'
import { beforeAll, afterEach, afterAll } from 'vitest'

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.url)
})


// 在所有測試前啟動 MSW
beforeAll(() => server.listen())

// 每個 test 後 reset handlers（避免互相影響）
afterEach(() => server.resetHandlers())

// 測試結束後關閉
afterAll(() => server.close())