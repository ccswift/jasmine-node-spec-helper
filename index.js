const appRootDir = require('app-root-dir').get();
const mock = require('mock-require');

var load = (file) => {
    exports.filePath = appRootDir + '/src/' + file;
    return exports;
}

var start = () => {
    return require(exports.filePath);
}

var restart = () => {
    return mock.reRequire(exports.filePath);
}

var exports = {
    start: start,
    restart: restart
};


exports.mock = mock;

module.exports = load;
