
module.exports = {
    moduleFileExtensions: [
        "js"
    ],
    testMatch: [
        "**/*.(test|spec).(js|jsx)"
    ],

    coveragePathIgnorePatterns: [
        "/node_modules/",
    ],
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "text-summary"
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/___mocks___/mockingStyle.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/___mocks___/mockingFile.js"
    }

};