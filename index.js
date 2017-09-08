// @flow

/**
 *  Docs:
 *  https://karma-runner.github.io/1.0/config/configuration-file.html
 */

/*::

export type KarmaConfig = {
  // Default: true
  // Enable or disable watching files and executing the tests whenever one of these files changes.
  autoWatch?: boolean,

  // Default: 250
  // When Karma is watching the files for changes, it tries to batch multiple changes into a single run so that the test runner doesn't try to start and restart running tests more than it should. The configuration setting tells Karma how long to wait (in milliseconds) after any changes have occurred before starting the test process again.
  autoWatchBatchDelay?: number,

  // Default: ''
  // The root path location that will be used to resolve all relative paths defined in files and exclude. If the basePath configuration is a relative path, then it will be resolved to the __dirname of the configuration file.
  basePath?: string,

  // Default: 2000
  // How long does Karma wait for a browser to reconnect (in ms).
  browserDisconnectTimeout?: number,

  // Configure how the browser console is logged with the following properties, all of which are optional:
  browserConsoleLogOptions?: {
    level: string,
    format: string,
    path: string,
    terminal: boolean
  },

  // Default: 0
  // The number of disconnections tolerated.
  browserDisconnectTolerance?: number,

  // Default: 10000
  // How long will Karma wait for a message from a browser before disconnecting from it (in ms).
  browserNoActivityTimeout?: number,

  // Default: []
  // A list of browsers to launch and capture. When Karma starts up, it will also start up each browser which is placed within this setting. Once Karma is shut down, it will shut down these browsers as well. You can capture any browser manually by opening the browser and visiting the URL where the Karma web server is listening (by default it is http://localhost:9876/).
  browsers?: Array<mixed>,

  // Default: 60000
  // Timeout for capturing a browser (in ms).
  captureTimeout?: number,

  client?: {
    // Default: undefined
    // When karma run is passed additional arguments on the command-line, they are passed through to the test adapter as karma.config.args (an array of strings). The client.args option allows you to set this value for actions other than run.
    args?: Array<string>,

    // Default: true
    // Run the tests inside an iFrame or a new window
    useIframe?: boolean,

    // Default: false
    // Run the tests on the same window as the client, without using iframe or a new window
    runInParent?: boolean,

    // Default: true
    // Capture all console output and pipe it to the terminal.
    captureConsole?: boolean,

    // Default: true
    // Clear the context window
    clearContext?: boolean,
  },

  // Default: true
  // Enable or disable colors in the output (reporters and logs).
  colors?: boolean,

  // Default: Infinity
  // How many browsers Karma launches in parallel.
  concurrency?: number,

  // Default: true
  // When true, this will append the crossorigin attribute to generated script tags, which enables better error reporting for JavaScript files served from a different origin. Disable this when you need to load external scripts that are served without the necessary Access-Control-Allow-Origin header.
  crossOriginAttribute?: boolean,

  // Default: null
  // If null (default), uses karma's own context.html file.
  customContextFile: string | null,

  // Default: null
  // If null (default), uses karma's own debug.html file.
  customDebugFile?: string | null,

  // Default: null
  // If null (default), uses karma's own client_with_context.html file (which is used when client.runInParent set to true).
  customClientContextFile?: string | null,

  // Default: undefined
  // Custom HTTP headers that will be set upon serving files by Karma's web server. Custom headers are useful, especially with upcoming browser features like Service Workers.
  // The customHeaders option allows you to set HTTP headers for files that match a regular expression. customHeaders is an array of Objects with properties as follows:
  // – match: Regular expression string to match files
  // – name: HTTP header name
  customHeaders?: Array<mixed>,

  // Default: false
  // When true, this will start the karma server in another process, writing no output to the console. The server can be stopped using the karma stop command.
  detached?: boolean,

  // Default: []
  // List of files/patterns to exclude from loaded files.
  exclude?: Array<any>,

  // Default: true
  // Enable or disable failure on running empty test-suites. If disabled the program will return exit-code 0 and display a warning.
  failOnEmptyTestSuite?: boolean,

  // Default: []
  // List of files/patterns to load in the browser.
  files?: Array<any>,

  // Default: false
  // Force socket.io to use JSONP polling instead of XHR polling.
  forceJSONP?: boolean,

  // Default: []
  // List of test frameworks you want to use. Typically, you will set this to ['jasmine'], ['mocha'] or ['qunit']...
  frameworks?: Array<string>,

  // Default: '0.0.0.0' or LISTEN_ADDR
  // Address that the server will listen on. Change to 'localhost' to only listen to the loopback, or '::' to listen on all IPv6 interfaces
  listenAddress?: string,

  // Default: 'localhost'
  // Hostname to be used when capturing browsers.
  hostname?: string,

  // Default: {}
  // Options object to be used by Node's https class.
  httpsServerOptions?: Object,

  // Default: config.LOG_INFO
  // Level of logging.
  logLevel?: number,

  // A list of log appenders to be used. See the documentation for log4js for more information.
  loggers?: Array<mixed>,

  // Default: []
  // List of names of additional middleware you want the karma server to use. Middleware will be used in the order listed.
  middleware?: Array<string>,

  // Default: {}
  // Redefine default mapping from file extensions to MIME-type
  mime?: Object,

  // Default: []
  // This is the same as middleware except that these middleware will be run before karma's own middleware.
  beforeMiddleware?: Array<string>,

  // Default: ['karma-*']
  // List of plugins to load. A plugin can be a string (in which case it will be required by Karma) or an inlined plugin - Object. By default, Karma loads all sibling NPM modules which have a name starting with karma-*.
  plugins?: Array<any>,

  // Default: 9876
  // The port where the web server will be listening.
  port?: number,

  // Default: 2000
  // How long will Karma wait for browser process to terminate before sending a SIGKILL signal.
  processKillTimeout?: number,

  // A map of preprocessors to use.
  preprocessors?: Object,

  // Default: 'http:'
  // Protocol used for running the Karma webserver.
  protocol?: string,

  // Default: undefined
  // Module used for Karma webserver.
  httpModule?: string,

  // Default: {}
  // A map of path-proxy pairs.
  proxies?: Object,

  // Default: true
  // Whether or not Karma or any browsers should raise an error when an invalid SSL certificate is found.
  proxyValidateSSL?: boolean,

  // Default: 0
  // Karma will report all the tests that are slower than given time limit (in ms). This is disabled by default (since the default value is 0).
  reportSlowerThan?: number,

  // Default: ['progress']
  // A list of reporters to use.
  reporters?: Array<string>,

  // Default: undefined
  // Format assertion errors and stack traces. Useful for removing vendors and compiled sources. Return an empty line '' to remove it.
  formatError?: function,

  // Default: false
  // When Karma is watching the files for changes, it will delay a new run until the current run is finished. Enabling this setting will cancel the current run and start a new run immediately when a change is detected.
  restartOnFileChange?: boolean,

  // Default: 2
  // When a browser crashes, karma will try to relaunch. This defines how many times karma should relaunch a browser before giving up.
  retryLimit?: number,

  // Default: false
  // Continuous Integration mode.
  singleRun?: boolean,

  // Default: ['polling', 'websocket']
  // An array of allowed transport methods between the browser and testing server. This configuration setting is handed off to socket.io (which manages the communication between browsers and the testing server).
  transports?: Array<string>,

  // Default: undefined
  // Called when requesting Proxy.
  proxyReq?: function,

  // Default: undefined
  // Called when respnsing Proxy.
  proxyRes?: function,

  // Default: undefined
  // For use when the Karma server needs to be run behind a proxy that changes the base url, etc
  upstreamProxy?: Object,

  // Default: '/'
  // The base url, where Karma runs.
  urlRoot?: string,

  // Default: 0
  // The JavaScript version to use in the Firefox browser.
  jsVersion?: number,
};

export type RunOptions = {
  files: Array<string>,
  config: KarmaConfig
};

 */

"use strict";

const Server = require("karma").Server;

exports.run = function run(opts /*: RunOptions */) /*: Promise<number> */ {
  return new Promise((resolve, reject) => {
    const config = opts.config || {};
    const files = [].concat(opts.files || []).concat(config.files || []);
    config.files = files;
    new Server(config, exitCode => {
      if (exitCode === 0) return resolve(exitCode);
      reject(exitCode);
    }).start();
  });
};
