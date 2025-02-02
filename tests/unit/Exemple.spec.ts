import { describe, it, expect } from 'vitest'
import { MathService } from '#/core'

describe('MathService', (): void => {
  it('should add two numbers correctly', (): void => {
    const result: number = MathService.add(2, 3)
    expect(result).toBe(5)
  })

  it('should subtract two numbers correctly', (): void => {
    const result: number = MathService.subtract(5, 3)
    expect(result).toBe(2)
  })
})
