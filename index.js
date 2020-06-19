var functions = require("firebase-functions");
var admin = require("firebase-admin");
var next = require("next");

admin.initializeApp();

var dev = process.env.NODE_ENV !== "production";
var app = next({
  dev,
  conf: {
    distDir: "dist/_next",
  },
});
var handle = app.getRequestHandler();

var server = functions.https.onRequest(function (request, response) {
  return app.prepare().then(function () {
    handle(request, response);
  });
});

exports.nextjs = {
  server: server,
};
