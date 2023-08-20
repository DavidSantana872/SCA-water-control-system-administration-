module.exports = {
    // ...otras configuraciones de webpack...
    resolve: {
      fallback: {
        "os": require.resolve("os-browserify/browser"),
        "fs": false // o, si es necesario, install 'fs' para incluir un polyfill
      }
    }
  };
  