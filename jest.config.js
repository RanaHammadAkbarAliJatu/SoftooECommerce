module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  "moduleNameMapper": {
    "^styled-components$": "<rootDir>/node_modules/styled-components/native/dist/styled-components.native.cjs.js"
  }
};
