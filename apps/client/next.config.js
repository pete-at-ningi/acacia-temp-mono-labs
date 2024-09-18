const withTM = require('next-transpile-modules')(['shared-components']);

module.exports = withTM({
  reactStrictMode: true,
});
