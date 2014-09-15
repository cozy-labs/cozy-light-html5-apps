express = require('express');
path = require('path');

module.exports.configureAppServer = function(app, config, routes, callback) {

  Object.keys(config.apps).forEach(function (appId) {
    staticApp = config.apps[appId];
    if(staticApp.type === "static") {
      var configDir = path.dirname(module.exports.configPath);
      var appPath = path.join(configDir, 'node_modules');
      appPath = path.join(appPath, staticApp.name);
      console.log(staticApp.name);
      console.log(appPath);
      app.use("/apps/" + staticApp.name, express.static(appPath));
    }
  });
  callback();
};


module.exports.getTemplate = function() {
  return '';
};

module.exports.configure = function(options, config, program) {
  module.exports.config = config;
  module.exports.configPath = options.config_path;
}
