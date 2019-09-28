module.exports = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  setupFiles: ["./test.setup.js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "babel-jest"
  },
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};