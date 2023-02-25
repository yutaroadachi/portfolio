import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/トップ/)
})

test.describe('リンクセクションのリンクからページへ遷移すること', () => {
  test('/skillsへ遷移すること', async ({ page }) => {
    const linkToSkills = page.getByTestId('skills')
    await expect(linkToSkills).toBeVisible()
    await linkToSkills.click()
    await expect(page).toHaveURL(/.*skills/)
  })

  test('/resumeへ遷移すること', async ({ page }) => {
    const linkToResume = page.getByTestId('resume')
    await expect(linkToResume).toBeVisible()
    await linkToResume.click()
    await expect(page).toHaveURL(/.*resume/)
  })
})
