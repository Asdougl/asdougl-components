import { randomString } from './random'

describe('Random Functions', () => {
  test('should create random string', () => {
    const random1 = randomString(),
      random2 = randomString()
    expect(typeof random1).toBe('string')
    expect(random1.length).toBeGreaterThan(0)
    expect(random1).not.toBe(random2)
  })
})
