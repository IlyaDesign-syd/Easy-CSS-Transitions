const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
    '\\.css$': '<rootDir>/emptyModule.js',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);