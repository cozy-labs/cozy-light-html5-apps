serveStatic = require('serve-static');
path = require('path');


var plugin = {
  configureAppServer: function(app, config, routes, callback) {
    var configureApp = function (appId) {
      staticApp = config.apps[appId];

      if(staticApp.type === "static") {
        var configDir = path.dirname(module.configPath);
        var appPath = path.join(configDir, 'node_modules');
        appPath = path.join(appPath, staticApp.name);

        app.use("/apps/" + staticApp.name, serveStatic(appPath));
        console.log('Server configured for app ' + staticApp.name);
      }
    };

    Object.keys(config.apps).forEach(configureApp);
    callback();
  },

  configure: function(options, config, program) {
    module.configPath = options.config_path;
  }
};

module.exports = plugin;
