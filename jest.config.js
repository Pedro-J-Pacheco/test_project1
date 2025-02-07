const { coverage } = require("browserslist");
const { TestEnvironment } = require("jest-environment-node");

module.exports = {
    TestEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    verbose : true , 
}