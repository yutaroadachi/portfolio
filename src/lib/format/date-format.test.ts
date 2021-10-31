import { formatYYYYMMDD } from './date-format'

test('formatYYYYMMDD', () => {
  const date = new Date('2021-3-21')
  expect(formatYYYYMMDD(date)).toEqual('2021/3/21')
})
