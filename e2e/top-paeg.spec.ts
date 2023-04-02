import { test, expect } from '@playwright/test'

test('トップページが表示できること', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/トップ/)
})
