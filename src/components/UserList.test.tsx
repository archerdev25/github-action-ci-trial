import { render, screen } from '@testing-library/react'
import UserList from '../components/UserList'
import { describe, it, expect } from 'vitest'

describe('UserList integration test (MSW)', () => {
  it('should render users from mocked API', async () => {
    render(<UserList />)

    // 等待 API 資料出現（MSW 攔截）
    const items = await screen.findAllByTestId('user-item')

    expect(items).toHaveLength(1)
    expect(items[0]).toHaveTextContent('John Doe')
    expect(items[0]).toHaveTextContent('john.doe@example.com')
  })
})
