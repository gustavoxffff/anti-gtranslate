export default {
  run: {
    startUrl: ["https://developer.mozilla.org"],
    browserConsole: true,
  },
  build: {
    overwriteDest: true,
  },
  ignoreFiles: [
    "**/*",
    "!manifest.json",
    "!src",
    "!src/**",
  ],
};
