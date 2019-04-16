var pkg = require('./package.json')

Package.describe({
  name: 'sasstastical:sasstastical-free',
  version: pkg.version,
  documentation: './README.md',
  git: 'https://www.github.com/sasstastical/sasstastical-free.git'
});

Package.onUse((api) => {
  api.versionFrom('1.8');
  api.addFiles(
    [
      'dist/css/sasstastical-free.css'
    ], 'client');
});
