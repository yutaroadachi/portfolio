import { defineConfig, devices } from '@playwright/test'

const BASE_URL = 'http://localhost:3000'

export default defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome'],
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 13'],
    },
  ],
  retries: process.env.CI ? 1 : 0,
  testDir: './e2e',
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? BASE_URL,
    trace: 'on-first-retry',
  },
  webServer: process.env.CI
    ? undefined
    : {
        command: 'pnpm dev',
        url: BASE_URL,
      },
  workers: process.env.CI ? 1 : undefined,
})
