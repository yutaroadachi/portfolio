import { truncate } from './string-format'

describe('truncate', () => {
  test.each`
    original    | maxLength | expected
    ${'react'}  | ${5}      | ${'react'}
    ${'react!'} | ${5}      | ${'reac…'}
  `(
    'original: $original, maxLength: $maxLengthの時、$expectedを返す',
    ({ original, maxLength, expected }) => {
      expect(truncate(original, maxLength)).toEqual(expected)
    }
  )
})
