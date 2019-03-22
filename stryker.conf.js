module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "command",
    commandRunner: { command: "npm run test-only" },
    transpilers: ["babel"],
    coverageAnalysis: "off",
    babel: {
      optionsFile: ".babelrc"
    }
  });
};
