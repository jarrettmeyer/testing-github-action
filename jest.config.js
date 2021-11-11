/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  moduleFileExtensions: ["js"],
  testEnvironment: "jsdom",
  testRegex: ["\\.spec\\.js$"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  verbose: true,
};

module.exports = config;
