import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 16000,
  retries: {
    runMode: 3,
    openMode: 0,
  },
  e2e: {
    baseUrl: "https://google.com",
  },
  chromeWebSecurity: false,
  video: false,
});
