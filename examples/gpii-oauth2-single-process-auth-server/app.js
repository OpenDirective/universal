"use strict";

var config = require("../../gpii/node_modules/gpii-oauth2/oauth2SamplesConfig.js");

var fluid = require("infusion");
require("./src/SingleProcessAuthServer.js");
var gpii = fluid.registerNamespace("gpii");

var server = gpii.oauth2.singleProcessAuthServer();
// TODO replace the line below with: server.expressApp.listen(server.options.port);
server.expressApp.listen(config.authorizationServerPort);
