const fs = require('fs-extra');
const path = require('path');

const getCypressConfigFile = configName => {
  const pathToConfigFile = path.resolve(
    __dirname,
    `cypress.${configName}.json`
  );
  return fs.readJsonSync(pathToConfigFile);
};

module.exports.getCypressConfigFile = getCypressConfigFile;
