import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: 'html',

  use: {
    launchOptions:{
      args:['--start-maximized']
    },
    baseURL: 'https://automationexercise.com',
    trace: 'on-first-retry',
    headless:false,
    screenshot:'on'
  },


  projects: [
    {
      name: 'chromium',
      use: { //...devices['Desktop Chrome'],
         viewport:null },
    }
   
  ],

});
