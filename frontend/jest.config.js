export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/node_modules/@testing-library/jest-dom"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};
