express = require('express');

module.exports.configureAppServer = function(app, config, routes, callback) {
  Object.keys(config.apps).forEach(function (appId) {
    var app = config.apps[appId];
    if(app.type === "static") {
      console.log(app);
      console.log(config);
      //app.use("/public", express.static(__dirname + "/public"));
    }
  });
  callback();
};


module.exports.getTemplate = function() {};
module.exports.configure = function(options, config, program) {};
